import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

import agenceimg1 from '../../public/Agenceimg/agenceimg1.jpg'
import agenceimg2 from '../../public/Agenceimg/agenceimg2.jpg'
import agenceimg3 from '../../public/Agenceimg/agenceimg3.jpg'
import agenceimg4 from '../../public/Agenceimg/agenceimg4.jpg'
import agenceimg5 from '../../public/Agenceimg/agenceimg5.jpg'
import agenceimg6 from '../../public/Agenceimg/agenceimg6.jpg'
import agenceimg7 from '../../public/Agenceimg/agenceimg7.jpg'
import agenceimg8 from '../../public/Agenceimg/agenceimg8.jpg'
import agenceimg9 from '../../public/Agenceimg/agenceimg9.jpg'
import agenceimg10 from '../../public/Agenceimg/agenceimg10.jpg'
import agenceimg11 from '../../public/Agenceimg/agenceimg11.jpg'
import agenceimg12 from '../../public/Agenceimg/agenceimg12.jpg'
import agenceimg13 from '../../public/Agenceimg/agenceimg13.jpg'
import agenceimg14 from '../../public/Agenceimg/agenceimg14.jpg'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    agenceimg1,
    agenceimg2,
    agenceimg3,
    agenceimg4,
    agenceimg5,
    agenceimg6,
    agenceimg7,
    agenceimg8,
    agenceimg9,
    agenceimg10,
    agenceimg11,
    agenceimg12,
    agenceimg13,
    agenceimg14,
  ]

  useGSAP(function () {

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: 'top 8%', // top 12%
        end: 'top -230%',  // top -131%
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })


  return (
    <div className='parent '>
      <div id='page1' className='py-1 '>
        <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-96 -top-80 lg:left-[30vw] left-[30vw]'>
          <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='lg:mt-[55vh] mt-[30vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw]' translate='no'>Soixan7e <br />
              Douze</h1>
          </div>
          <div className='lg:pl-[40%] lg:mt-20 mt-4 p-3'>
            <p className='lg:text-6xl text-xl leading-tight' translate='no'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
          <div className='lg:pl-[40%]  mt-4 p-3'>
            <p className='lg:text-6xl text-xl leading-tight' translate='no'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our curiosity nourishes our creativity. We remain humble and we say no to the big Egos, even yours. A brand is alive. She has values, a personality, a story. If we forget that, we can make good figures in the short term, but we kill her in the long term. This is why we are committed to giving perspective, to build influential marks.</p>
          </div>


          <div className="lg:hidden mt-4 p-3">
            <p
              className="lg:text-6xl text-xl leading-tight"
              translate="no"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Our curiosity nourishes our creativity. We remain humble and we say no to
              the big Egos, even yours. A brand is alive. She has values, a personality,
              a story. If we forget that, we can make good figures in the short term, but
              we kill her in the long term. This is why we are committed to giving
              perspective, to build influential marks.
            </p>
          </div>

          <div className="container mx-auto px-4 lg:mt-40">
            {/* Expertise Section */}
            <div className="flex flex-col md:flex-row md:gap-6 mb-8">
              <div className="flex-1 mb-4 md:mb-0">
                <h2
                  className="text-2xl md:text-3xl font-semibold animate-fadeIn"
                  data-scroll=""
                >
                  Expertise
                </h2>
              </div>
              <div className="flex-1">
                <ul className="space-y-2 text-lg md:text-xl animate-fadeIn" data-scroll="">
                  <li className="delay-100">Stratégie</li>
                  <li className="delay-200">Publicité</li>
                  <li className="delay-300">Branding</li>
                  <li className="delay-400">Design</li>
                  <li className="delay-500">Contenu</li>
                </ul>
              </div>
            </div>

            {/* Text Blocks Section */}
            <div className="flex flex-col md:flex-row md:gap-6">
              <div className="flex-1 mb-6 md:mb-0">
                <p
                  className="text-lg md:text-xl leading-relaxed animate-fadeIn"
                  data-scroll=""
                >
                  Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et
                  vivent grâce à la créativité sous toutes ses formes.
                </p>
              </div>
              <div className="flex-1 mb-6 md:mb-0">
                <p
                  className="text-lg md:text-xl leading-relaxed animate-fadeIn delay-200"
                  data-scroll=""
                >
                  Notre création_ bouillonne dans un environnement où le talent a le goût
                  d’exploser. Où on se sent libre d’être la meilleure version de soi-même.
                </p>
              </div>
              <div className="flex-1">
                <p
                  className="text-lg md:text-xl leading-relaxed animate-fadeIn delay-400"
                  data-scroll=""
                >
                  Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage
                  participe à bâtir une agence dont on est fiers.
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
      <div id='page2' className=" h-screen">

      </div>
    </div>
  )
}

export default Agence