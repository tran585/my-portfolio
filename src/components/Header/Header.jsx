import { Icons } from '../routeComponents'
import { useState, useEffect } from 'react'
import LogoName from '../../assets/logo/logo-portfolio'

export default function Header() {
  const [lastScrollTop, setLastScrollTop] = useState(0) // state to know scroll down or up by user //
  const [isOpened, setIsOpened] = useState(false) // to show icons xmark/bars depending scroll down or click //
  const [isHidden, setIsHidden] = useState(false) // with lastScrollTop this state will be true/false //

  useEffect(() => {
    function handleScroll() {
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop
      if (currentScroll > lastScrollTop) {
        setIsHidden(true) // Scroll vers le bas
        setIsOpened(false)
      } else {
        setIsHidden(false) // Scroll vers le haut
      }
      setLastScrollTop(currentScroll)
    }
    window.addEventListener('scroll', handleScroll) // event when scroll + function handleScroll //
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollTop])
  return (
    <header
      className={`fixed transition-all bg-[#0a192f] duration-300 ease-in z-10 w-screen px-6 pt-6 pb-4 ${
        lastScrollTop < 35 && 'translate-y-0 shadow-none'
      } ${isHidden ? '-translate-y-full' : 'translate-y-0 shadow-2xl'}`}>
      <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          {/* logo nav (name) */}
          <a href="#" aria-label="Retour en haut de la page" tabIndex={isHidden ? -1 : undefined} className="relative w-24 h-14">
            <LogoName className="absolute rounded-xl w-full h-full top-0 right-0 left-0 bottom-0 fill-green-400 transition-all duration-300 hover:fill-green-500/90 hover:scale-105" />
          </a>
          {/* with negation ! reverse isOpened state to open/close sidebar || icons */}
          <button className='md:hidden' aria-current="true" onClick={() => setIsOpened(!isOpened)}>
            <Icons
              type={isOpened ? 'xmark' : 'bars'}
              className="w-6 fill-green-400 relative z-40"
            /><span className="sr-only">Ouvrir ou fermer le menu de navigation</span> 
          </button>
          <div
            className={`absolute top-full bg-[#0a192f] right-0 w-full p-4 transition-all duration-500 ease-in md:relative md:block md:w-auto z-30 ${
              isOpened
                ? 'opacity-100 translate-x-0'
                : 'translate-x-full md:translate-x-0 md:opacity-100'
            }`} // visible above md (768px)
          >
            {/* nav menu list (home | skills | projects | contact) */}
            <ul className="flex flex-col items-center font-medium mt-4 gap-8 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row  md:gap-0 md:mt-0">
              <li>
                <a
                  href="#"
                  className="py-2 px-3 p-0 text-white hover:text-green-300"
                  aria-current="page">
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#skills-section"
                  className="py-2 px-3 p-0 text-white hover:text-green-300">
                  Compétences
                </a>
              </li>
              <li>
                <a
                  href="#projets-section"
                  className="py-2 px-3 p-0 text-white hover:text-green-300">
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="#contact-section"
                  className="py-2 px-3 p-0 text-white hover:text-green-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
