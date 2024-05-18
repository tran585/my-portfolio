import { Icons } from '../../../components/routeComponents'
import image from '../../../assets/images/profil-webp-208w.webp'

const HeroSection = () => {
  // first section //
  return (
    <section id="hero-section" className="container mx-auto sm:w-1/2" aria-label="Section principale">
      {' '}
      {/* small device responsive = 50% width */}
      <div className="flex justify-center">
        <div className="flex flex-col gap-10 items-center w-full h-full">
          <img // <!-- img profil --> <!-- img profil --> //
            className="rounded-full h-52 w-52"
            src={image}
            alt="Mon image portrait"
          />
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl xs:text-4xl sm:text-6xl">
              <span className="text-xl xs:text-2xl">Hello, je suis</span>
              <br />
              Tran Thanh Tung
            </h1>
            <div className="w-max">
              <span className="block animate-typing xs:text-2xl overflow-hidden whitespace-nowrap border-r-4 border-r-green text-xl sm:text-5xl text-green-400 font-bold">
                Développeur Front-end
              </span>
            </div>
            {/* text  */}
            <p className="text-gray-400 text-lg md:mt-5">
              En tant que développeur Front-end, je suis passionné par la création d&#39;expériences web captivantes, mettant
              en avant la créativité, l&#39;expérience utilisateur et le
              design. <br /><br />
              Mon parcours a débuté par la formation de technicien informatique
              chez OpenClassrooms, où j&#39;ai eu l&#39;opportunité
              d&#39;explorer et de travailler dans le domaine de l&#39;informatique.
            </p>
            <div className="flex">
              <a
                href="https://github.com/tran585"
                target="_blank"
                className="flex items-center justify-around text-white bg-gray-800 border-gray-700 hover:bg-gray-700 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 w-1/2">
                <Icons type="github" className="w-10 fill-green-400" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
