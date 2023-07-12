import React, { useCallback } from 'react';
import Particles from "react-particles";
import { Link } from 'react-router-dom';
import { loadFull } from "tsparticles";

const EntryPage = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // You can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // This loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // Starting from v2, you can add only the features you need, reducing the bundle size
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
                            quantity: 6,
                        },
                        repulse: {
                            distance: 150,
                            duration: 0.7,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 100,
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
    <div className='text-white flex lg:flex-col md:flex-row justify-center items-center'>
        <div className='text-center font-extrabold text-4xl w-[90%] mb-10'>
            Welcome to FileLink.io, the ultimate file sharing solution! Unlock seamless and secure file transfers with just a click.
          <div className='buttons flex justify-center mt-10 gap-5'>
            <Link to='/upload' ><button className='rounded-md uppercase text-xl text-black font-semibold bg-white w-fit px-4 py-2'>Upload File</button></Link>
            <Link to='/about'><button className='rounded-md uppercase text-xl text-black font-semibold bg-white w-fit px-4 py-2'>About</button></Link>
          </div>
        </div>
        
    </div>
    </>
  );
};

export default EntryPage;

