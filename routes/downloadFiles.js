require("dotenv").config();
const router = require('express').Router();
const File = require("../models/file")

//this route provides the path to download the file

router.get('/:uuid', async (req,res) => {
    try{
        const file = await File.findOne({ uuid: req.params.uuid });
        if(!file){
            return res.status(404).send({error: 'Link has been expired'})
        }
        return res.status(200).send({
            uuid: file.uuid,
            fileName: file.filename,
            fileSize: file.size,
            download: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`
        });
        // http:localhost:5000/file/download/:uuid
        // e.g uuid e8b8da62-0371-487a-a319-38a0c4b652e8
    }catch(err) {
        return res.status(500).send({error : 'something went wrong'})
    }
})

module.exports = router;