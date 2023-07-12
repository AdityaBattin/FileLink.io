import React from 'react'
import { AiOutlineMenu  } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { BsFillFolderSymlinkFill } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#040404] border-b  mb-3" style={{ borderBottomWidth: '2px' }}>
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-2xl flex justify-center items-center gap-3 font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              <BsFillFolderSymlinkFill size={30} />
              FileLink.io
            </a>
            <button
              className="text-white  cursor-pointer text-2xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <AiOutlineMenu />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo" to='/'
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">HOME</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#phgh" to='/about'
                >
                  <i className="fab fa-twitter text-lg leading-xl text-white opacity-75"></i><span className="ml-2">ABOUT</span>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-2xl uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <FaGithubAlt  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
