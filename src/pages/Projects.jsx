import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap, { ScrollTrigger } from 'gsap/all'

import projectimg1 from '../../public/Projetsimg/projectimg1.jpg'
import projectimg2 from '../../public/Projetsimg/projectimg2.jpg'
import projectimg3 from '../../public/Projetsimg/projectimg3.jpg'
import projectimg4 from '../../public/Projetsimg/projectimg4.jpg'
import projectimg5 from '../../public/Projetsimg/projectimg5.jpg'
import projectimg6 from '../../public/Projetsimg/projectimg6.jpg'
import projectimg7 from '../../public/Projetsimg/projectimg7.jpg'
import projectimg8 from '../../public/Projetsimg/projectimg8.jpg'
import projectimg9 from '../../public/Projetsimg/projectimg9.jpg'
import projectimg10 from '../../public/Projetsimg/projectimg10.jpg'
import projectimg11 from '../../public/Projetsimg/projectimg11.jpg'
import projectimg12 from '../../public/Projetsimg/projectimg12.jpg'
import projectimg13 from '../../public/Projetsimg/projectimg13.jpg'
import projectimg14 from '../../public/Projetsimg/projectimg14.jpg'
import projectimg15 from '../../public/Projetsimg/projectimg15.jpg'
import projectimg16 from '../../public/Projetsimg/projectimg16.jpg'

const Projects = () => {

  const projects = [{
    image1: projectimg1,
    image2: projectimg2,
  }, {
    image1: projectimg3,
    image2: projectimg4,
  }, {
    image1: projectimg5,
    image2: projectimg6,
  },
  {
    image1: projectimg7,
    image2: projectimg8,
  },

  {
    image1: projectimg9,
    image2: projectimg10
  },
  {
    image1: projectimg11,
    image2: projectimg12
  },
  {
    image1: projectimg13,
    image2: projectimg14
  },
  {
    image1: projectimg15,
    image2: projectimg16
  },

  ]


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 170%',
        end: 'top -600%',
        scrub: true
      }
    })
  })


  return (
    <div className='lg:p-4 p-2 '>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase' translate='no'>Projets</h2>
      </div>
      <div className='-lg:mt-20 lol'>
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[600px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}
      </div>
    </div>
  )
}

export default Projects