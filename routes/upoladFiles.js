const router = require('express').Router();
const multer = require('multer');
const path = require('path')
const File = require('../models/file')
const { v4 : uuid4 } = require('uuid')

// multer configuration
let storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    }
});

let upolad = multer({
    storage,
    limit: {fileSize: 1000000 * 100},
}).single('selected_file');

router.post('/', async (req,res) => {
    upolad(req, res, async (err) => {
        // validating the request
        if(!req.file) {
            return res.json({error : 'file is not able to upload.'})
        }
        //storing the file in Uploads folder
        if(err) {
            return res.status(500).send({ error : err.message })
        }
        // storing the file in database
        const file = new File({
            filename: req.file.filename,
            uuid: uuid4(),
            path: req.file.path,
            size: req.file.size
        });
        //responce => link for download
        const response = await file.save()
        return res.json({ file: `${process.env.APP_BASE_URL}/files/${response.uuid}` , uuid: response.uuid})
        // e.g responce link "http://localhost:5000/files/e8b8da62-0371-487a-a319-38a0c4b652e8"

    });
})

router.post('/send', async (req,res) => {
    const { uuid, emailTo, emailFrom } = req.body;
    // validate request
    if(!uuid || !emailTo || !emailFrom){
        return res.status(422).send({error: 'All Fields are required'})
    }
    // get data from database
    const file = await File.findOne({ uuid: uuid })
    if(file.sender) {
        // email has alredy been sent onse
        return res.status(422).send({ error : 'Email alredy sent..'})
    }

    file.sender = emailFrom;
    file.reciver = emailTo;

    const responce = await file.save();

    // send mail
    const sendMail = require("../services/emailService")
    sendMail({
        from: emailFrom,
        to: emailTo,
        subject: 'FileLink.io | sent you a file',
        text: `${emailFrom} shared a file with you. size : ${file.size} & Link to download : ${process.env.APP_BASE_URL}/files/download/${file.uuid}`,
        html: require('../services/eamilTemplate')(
            {
                emailFrom: emailFrom,
                downloadLink:`${process.env.APP_BASE_URL}/files/download/${file.uuid}`,
                size: parseInt(file.size/1000) + ' KB',
                expires: ' 24 Hours'
            }
        )
    });
    res.status(200).send({ send_status: true })
})

module.exports = router;