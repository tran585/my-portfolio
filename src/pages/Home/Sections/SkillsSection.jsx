import { Icons } from '../../../components/routeComponents'

const SkillsSection = () => {
  return (
    <section id='skills-section' aria-label="Section mes compétences" className="flex flex-col gap-16">
      <h2 className="text-center">Mes compétences</h2>
      <div className="flex flex-col gap-10 justify-center items-center md:flex-row md:items-stretch	">
        {/* items 1 (Front-end) */}
        <div className="flex flex-col gap-16 max-w-sm p-5 w-full rounded-lg shadow bg-[#112240] border-gray-700">
          <h3 className="text-center">Front-end</h3>
          <div className="grid grid-cols-3 gap-10 justify-items-center	">
            <Icons type="html" className="w-10" />
            <Icons type="css" className="w-10" />
            <Icons type="sass" className="w-10" />
            <Icons type="javascript" className="w-10" />
            <Icons type="react" className="w-10" />
            <Icons type="tailwind" className="w-10" />
          </div>
        </div>
        {/* items 2 (Design) */}
        <div className="flex flex-col gap-16 max-w-sm p-5 w-full rounded-lg shadow bg-[#112240] border-gray-700">
          <h3 className="text-center">Design</h3>
          <div className="grid grid-cols-3 gap-10 justify-items-center">
            <Icons type="figma" className="w-10" />
            <Icons
              type="canva"
              className="w-10 rounded-full bg-gradient-to-r from-[#01C3CC] to-[#2A89DA]"
            />
          </div>
        </div>
        {/* items 3 (Others) */}
        <div className="flex flex-col gap-16 max-w-sm p-5 w-full rounded-lg shadow bg-[#112240] border-gray-700">
          <h3 className="text-center">Autres</h3>
          <div className="grid grid-cols-3 gap-10 justify-items-center	">
            <Icons type="github" className="w-10 fill-slate-300	" />
            <Icons type="vscode" className="w-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
