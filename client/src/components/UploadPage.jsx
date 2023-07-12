import React from 'react'
import { useState, useCallback } from "react";
import { Box, Input, Button} from "@chakra-ui/react";
import axios from 'axios';
import QRCode from 'react-qr-code';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { MdUpload } from 'react-icons/md'
import { BiCopy } from 'react-icons/bi'
import { TbSend} from 'react-icons/tb'



const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [data, setdata] = useState(null);
  const [isUploaded, setisUploaded] = useState(false);
  const [emailTo, setEmailTo] = useState('');
  const [emailFrom, setEmailFrom] = useState('');
  const [copied, setCopied] = useState(false);

  const copy_to_clipboard = () => {
    setCopied(true)
    navigator.clipboard.writeText(accesslink);
    setTimeout(() => {
      setTimeout(false)
    }, 500)
    alert('link copied')
  }

  
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert("Please select a file.");
      return;
    }
    const formData = new FormData();
    formData.append("selected_file", file);
    try {
      const response = await axios.post("http://localhost:5000/api/upload", formData);
      console.log(response.data); 
      setdata(response.data)
      // Assuming the server returns a response containing the link to the uploaded file
      // You can store the link in state and display it on the page if desired
      setisUploaded(true)
    } catch (error) {
      console.error("Error uploading file:", error);
      // Handle error condition
    }

  };

  const handleFormSubmit1 = async (event) => {
    event.preventDefault();

    // Create the JSON data object
    
      const jsonData = {
      uuid: data.uuid,
      emailTo: emailTo,
      emailFrom: emailFrom
    }
    try {
      const response = await axios.post('http://localhost:5000/api/upload/send', jsonData);
      console.log(response.data);
      alert("Email Sent Successfully")
      // Handle success condition
    } catch (error) {
      console.error('Error sending email:', error);
      alert("Email not sent : ", error)
      // Handle error condition
    }
  };

  let accesslink = '';
  if (data) {
    accesslink = `http://localhost:3000/download/${data.uuid}`;
  }
  
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <>
    <div className='entry-page-container absolute -z-20'>
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#040404",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 3,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.5,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    </div>
      <Box maxW="lg" mx="auto" className='lg:mt-10 mb-3' p={4} borderWidth="1px" borderRadius="md">
        {
          !isUploaded && (
            <form onSubmit={handleFormSubmit} className='flex flex-col justify-center items-center text-white gap-8'>
                <MdUpload size={200} />
                <Input type="file" onChange={handleFileChange}  className=' text-center text-white px-4 py-1' />
                <Button type="submit" onClick={handleFormSubmit} className=' bg-white text-black text-lg w-full '>
                   Upload
                </Button>
            </form>
          )
        }
        {file && isUploaded && (
          <Box className='flex lg:mt-5 flex-col justify-center items-center '>
            {/* <Link href={accesslink} target='_blank' color="teal.500">
              Download
            </Link> */}
            <Button className='w-full mb-3 mt-1 uppercase flex gap-3 ' onClick={copy_to_clipboard}>Copy <BiCopy /> </Button>
            <QRCode value={accesslink} />
            <Box maxW="sm" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="md" >
              <form  onSubmit={handleFormSubmit1} className='flex flex-col justify-center items-center text-white' >
                <Input
                    type="email"
                    placeholder="Email To"
                    value={emailTo}
                    onChange={(e) => setEmailTo(e.target.value)}
                    mb={4}
                />
                <Input
                    type="email"
                    placeholder="Email From"
                    value={emailFrom}
                    onChange={(e) => setEmailFrom(e.target.value)}
                    mb={4}
                />
                <Button type="submit" className='w-full flex gap-3 uppercase text-black bg-white'>
                    Send Email <TbSend size={18} />
                </Button>
              </form>
            </Box>
          </Box>
        )}
      </Box>
    </>
  )
}
export default UploadPage;
