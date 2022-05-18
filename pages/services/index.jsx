import React from 'react'
import Container from '../../components/Container'
import Title from '../../components/Title'
import {BiCodeAlt} from 'react-icons/bi'
import {GiProgression} from 'react-icons/gi'
import {GrWordpress, GrReactjs} from 'react-icons/gr'


const services = [
  {
    "id": "1",
    "service": "Web Development",
    "description": "Responsive websites built for an optimal user experience that achieves your business goals.",
    "icon": <BiCodeAlt className='m-auto text-6xl text-main-color' />,
  },
  {
    "id": "2",
    "service": "Performance & SEO",
    "description": "Make your website fast, easy to find, and reach the widest audience possible.",
    "icon": <GiProgression className='m-auto text-6xl text-main-color' />,
  },
  {
    "id": "3",
    "service": "WordPress",
    "description": "Manage your website using the web's most popular content management system.",
    "icon": <GrWordpress className='m-auto text-6xl text-main-color' />,
  },
  {
    "id": "4",
    "service": "React",
    "description": "Responsive websites designed to optimize user experience and achieve your business goals using the latest development technologies, including React.",
    "icon": <GrReactjs className='m-auto text-6xl text-main-color' />,
  }
]

const Services = (theme) => {
  return (
    <section>
      <Container>
        <Title text="My services" smallText="what i provide" />
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
          {services.map(({service, description, icon, id}) => (
            <div className='p-5 text-center rounded-xl border-black/[.2] dark:border-white/[.2] dark:bg-slate-900/[.1] shadow-xl border-solid-1 border bg-red dark:shadow-[0_20px_25px_-5px_rgba(255,255,255,0.3)]' key={id}>
              {icon}
              <div className='mt-3 mb-4 text-3xl'>{service}</div>
              <p className="text-xl">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Services