import {
  HeroSection,
  SkillsSection,
  GallerySection,
  ContactSection,
} from './index'

const Home = () => {
  return (
    <main className="flex flex-col gap-20 px-6 pt-36 pb-24 overflow-x-hidden lg:gap-28 2xl:gap-48">
      <HeroSection />
      <SkillsSection />
      <GallerySection />
      <ContactSection />
    </main>
  )
}

export default Home
