import React, { useCallback } from 'react'
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { BsFillSafeFill } from 'react-icons/bs'
import { RiMailSendFill } from 'react-icons/ri'
import { GiFastArrow } from 'react-icons/gi'
import { AiOutlineCodepen } from 'react-icons/ai'
import { BiQrScan } from 'react-icons/bi'

const About = () => {
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
    <div className='flex flex-col justify-center items-center w-screen h-fit px-2 py-2 gap-2'>
        <div className='card flex justify-around items-center border rounded-lg text-white px-2 py-2'>
            <div className='icon w-[20%] m-2'><BsFillSafeFill size={60} color='white' /></div>
            <div className='flex-1'>FileLink.io allows for secure file sharing through links by utilizing universally unique identifier (UUID) standards.</div>
        </div>
        <div className='card flex justify-around items-center border rounded-lg text-white px-2 py-2'>
            <div className='icon w-[20%] m-2'><VscWorkspaceTrusted size={60} /></div>
            <div className='flex-1'>FileLink.io ensures reliable file sharing through links by providing a security ID and automatically erasing files after every 24 hours.</div>
        </div>
        <div className='card flex justify-around items-center border rounded-lg text-white px-2 py-2'>
            <div className='icon w-[20%] m-2'><GiFastArrow size={60} /></div>
            <div className='flex-1'>FileLink.io is efficient in sending files that are less than 100MB in size quickly.</div>
        </div>
        <div className='card flex justify-around items-center border rounded-lg text-white px-2 py-2'>
            <div className='icon w-[20%] m-2'><RiMailSendFill size={60} /></div>
            <div className='flex-1'>FileLink.io provides the feature to securely send the link via email using the Simple Mail Transfer Protocol (SMTP) mechanism.</div>
        </div>
        <div className='card flex justify-around items-center border rounded-lg text-white px-2 py-2'>
            <div className='icon w-[20%] m-2'><BiQrScan size={60} /></div>
            <div className='flex-1'>FileLink.io offers a feature to scan a QR code for the file, allowing users to easily access it on a nearby mobile device.</div>
        </div>
            <div className='card flex justify-around items-center border rounded-lg text-white px-2 py-2'>
            <div className='icon w-[20%] m-2'><AiOutlineCodepen size={60} /></div>
            <div className='flex-1'>FileLink.io operates on a reliable and trusted system known as the MERN Stack, which is a JavaScript software stack for building dynamic web applications. It consists of MongoDB, Express.js, React.js, and Node.js.</div>
        </div>
    </div>
    </>
  )
}

export default About
