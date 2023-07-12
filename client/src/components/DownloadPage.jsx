import React, {  useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { TbWorldExclamation } from 'react-icons/tb'
import { FaDownload } from 'react-icons/fa'
import { GiExplodingPlanet } from 'react-icons/gi'
import { Button } from '@chakra-ui/react'


// Tested with the route working 🌟🌟
// http://localhost:3000/download/e8b8da62-0371-487a-a319-38a0c4b652e8 

const DownloadPage = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);
  const { uuid } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/download/${uuid}`);
        setData(response.data);
      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    };

    fetchData();
  },[uuid]);

  if (!data) {
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
                        speed: 3,
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
      <div className='flex flex-col gap-4 justify-center items-center text-white'>
        <GiExplodingPlanet size={200} />
        <div className='text-2xl'>404</div>
        <div className='text-xl uppercase'>Data Not Found</div>
      </div> 
      </>
      );
  }

  const previewUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(data.download)}&embedded=true`;

  const handlePreviewClick = (e) => {
    e.preventDefault();
    window.open(previewUrl, '_blank');
  };

  const handleDownloadClick = () => {
    window.location.href = data.download;
  };
  let filesize = parseInt(data.fileSize/1000)
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
                        speed: 3,
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
    <div className='flex flex-col justify-center items-center gap-5 text-white'>
      <FaDownload size={200} />
      <div className='flex flex-col gap-2 justify-center items-center'>
        <div className='text-center'>
            <p className=' font-semibold uppercase md-2'>Security ID</p>
            <p className='border px-4 py-2 rounded-md font-semibold'>{data.uuid}</p>
        </div>
        <p>{data.fileName}</p>
        <p className='font-semibold'>{filesize}{' '}KB</p>
      </div>
      {data.download && ( 
        <p>
          <Button href={previewUrl} onClick={handlePreviewClick} target="_blank" rel="noopener noreferrer">Preview</Button>
          {' | '}
          <Button onClick={handleDownloadClick}>Download</Button>
        </p>
      )}
      { !data.download && (
        <div className='flex flex-col gap-4 justify-center items-center text-white'>
            <TbWorldExclamation size={200} />
            <div className='text-xl uppercase'>Something Went Wrong</div>
        </div> 
      )}
    </div>
  </>
  )
}

export default DownloadPage
