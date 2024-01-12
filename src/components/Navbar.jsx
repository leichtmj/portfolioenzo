import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { currentlanguage } from  "../constants/index";
import { menu, close, language, england, france, cvFr, cvEn } from "../assets";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [trigger, setTrigger] = useState(false);
  let local = currentlanguage();

  useEffect(
    function switchEn() {
    if (!trigger) {
      if (localStorage.language == "en") {
        localStorage.setItem("language", "fr")
      }
    }
  }, [trigger]);
  
  useEffect(
    function switchfr() {
    if (trigger) {
      if (localStorage.language == "fr") {
        localStorage.setItem("language", "en")
      }
    }
  }, [trigger]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handelclick = () => {
    setTrigger(!trigger);
    setTimeout(()=>{
      window.location.reload(false);
    }, 1500);
    console.log(localStorage)
    console.log(local)
    console.log(trigger)
  }

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            {local.strings.nav.s1} &nbsp;
            <span className='sm:block hidden'>{local.strings.nav.s2}</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {local.navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer'>
            <a
                href={trigger ? cvEn : cvFr}
                download="Enzo Landrecy CV"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>CV</button>
              </a>
          </li>
          <li className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer sm:flex gap-2 w-32' onClick={() => handelclick() }>
            <img src={language} alt="test" />
            <img src={trigger ? england :  france } alt={trigger ?  "France" : "Anglais" } width="25%"/>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              
              {local.navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
