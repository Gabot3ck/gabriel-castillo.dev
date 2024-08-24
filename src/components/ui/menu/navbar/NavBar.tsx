import Link from "next/link";
import { NavLink, RRSSLink } from "../components";
import { FaInstagram, FaLinkedinIn, FaGithub, FaTiktok } from "react-icons/fa";


export const NavBar = () => {

  return (
    <nav className="fixed z-40 w-full h-14 bg-light-500 border-b" >
      <main className="mx-auto px-4 md:px-2 xl:px-4 h-full  max-w-[1400px] flex justify-between items-center ">
        {/* Logo */}
        <div>
          <Link href='/'>
            <span className="font-bold" >
                Gaboteck
            </span>
          </Link>
        </div>

        {/* Center Menu */}
        <div className="hidden w-2/3 md:flex justify-around xl:justify-evenly">
          <NavLink href="/" title="Inicio" />
          <NavLink href="/servicios" title="Servicios" />
          <NavLink href="/proyectos" title="Proyectos" />
          <NavLink href="/habilidades" title="Habilidades" />
          <NavLink href="/sobre-mi" title="Un poco sobre mi" />
        </div>

        {/* section of RRSS */}
        <section className="w-44 hidden md:flex justify-between items-center px-2 xl:p-0" >
          <RRSSLink 
            href="https://www.linkedin.com/in/gabriel-castillo-frontend/" 
            icon={ <FaLinkedinIn /> }  
          />

          <RRSSLink 
            href="https://github.com/Gabot3ck" 
            icon={ <FaGithub /> }  
          />

          <RRSSLink 
            href="https://www.instagram.com/gabot3ck" 
            icon={ <FaInstagram /> }  
          />

          <RRSSLink 
            href="https://www.tiktok.com/@gaboteck" 
            icon={ <FaTiktok /> }  
          />

          {/* <button 
            className="w-28 h-10 rounded-lg hidden md:block bg-primary-500 text-white hover:bg-primary-400
            transition-colors duration-300 ease-out" 
            type="submit"
          >
            Contáctame
          </button> */}
        </section>
      </main>
    </nav>
  )
}
