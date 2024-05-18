import { Icons } from '../routeComponents'

/* eslint-disable */
const Card = ({ picture, alt, title, description, skills, links }) => {
  return (
    // <!-- Card --> <!-- Card --> //
    <div className="block rounded-2xl shadow-md bg-[#112240] max-w-md overflow-hidden">
      {/* <!-- Card image --> */}
      <a
        href={links.website ? links.website : ''}
        target='_blank'
        className={`${!links.website && 'pointer-events-none'}`}
        >
        <img
          className="rounded-t-2xl w-full object-cover hover:opacity-90 hover:scale-105 transition-all duration-300"
          src={picture}
          alt={alt}
          loading="lazy"
        />
      </a>

      {/* <!-- Card body --> */}
      <div className="flex flex-col gap-2 pt-3 pb-6 px-8">
        {/* <!-- Title --> */}
        <h3 className="mb-2 text-xl font-bold tracking-wide text-white text-center">
          {title}
        </h3>
        {/* <!-- description --> */}
        <p className="text-gray-400 mb-5">{description}</p>
        {/* <!-- links -- Icons github & folder - links --> */}
        <div className="flex flex-row justify-between">
          <div className="flex gap-3">
            <a
              href={links.github}
              target="_blank"
              aria-label={`lien vers le github du projet ${title}`}>
              <Icons
                type="github"
                className="fill-gray-400 w-6 h-6 hover:fill-green-400"
              />
            </a>
            {links.website && (
              <a
                href={links.website}
                target="_blank"
                aria-label={`lien vers le site ${title}`}>
                <Icons
                  type="folder"
                  className="fill-gray-400 w-5 h-6 hover:fill-green-400"
                />
              </a>
            )}
          </div>
          <div className="flex gap-4">
            {/* <!-- skills icons --> */}
            {skills.map((skill, idx) => {
              return (
                <Icons
                  key={`skills ${(title, idx)}`}
                  type={skill}
                  className="w-6 h-6 fill-gray-400"
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
    // <!-- Card --> <!-- Card --> //
  )
}

export default Card
