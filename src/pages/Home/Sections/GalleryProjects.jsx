import { Card } from '../../../components/routeComponents'
import { axiosRequest } from '../../../utils/axiosConfig/axiosRequest'
import { useEffect, useState } from 'react'


/* eslint-disable */
const GalleryProjects = () => {
  const [datasProjects, setDatasProjects] = useState() // configure state datas projects //

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axiosRequest(
        '/datas/datasProjects.json',
        null,
        null,
        'get'
      )
      setDatasProjects(response.data)
    }
    fetchProjects()
  }, [])

  return (
    <section id="projets-section" aria-label="Section projets" className="flex flex-col items-center gap-10">
      <h2>Mes projets</h2>
      <div className="grid sm:grid-cols-2 2xl:grid-cols-3 gap-10">
        {/* container of all projects iterate by map */}
        {datasProjects?.map(({id, picture, logo, title, description, skills, alt, links}) => {
          return <Card key={`${id}`} picture={picture} title={title} description={description} skills={skills} logo={logo} links={links} alt={alt}/>
        })
        }
      </div>
    </section>
  )
}

export default GalleryProjects
