import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import { NavbarContext } from '../../context/NavContext'
import fullnavimg1 from '../../../public/fullscreennav/fullnavimg1.jpg'
import fullnavimg2 from '../../../public/fullscreennav/fullnavimg2.jpg'
import fullnavimg3 from '../../../public/fullscreennav/fullnavimg3.webp'
import fullnavimg4 from '../../../public/fullscreennav/fullnavimg4.jpg'
import fullnavimg5 from '../../../public/fullscreennav/fullnavimg5.gif'
import fullnavimg6 from '../../../public/fullscreennav/fullnavimg6.png'
import fullnavimg7 from '../../../public/fullscreennav/fullnavimg7.gif'



const FullScreenNav = () => {


    const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)


    const [navOpen, setNavOpen] = useContext(NavbarContext);
    console.log(navOpen)


    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }


    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
    }, [navOpen])



    return (
        <>
            <div ref={fullScreenRef} id='fullscreennav' className='fullscreennav text-white overflow-hidden h-screen z-50 w-full absolute '>
                <div className='h-screen w-full fixed'>
                    <div className='h-screen w-full flex'>
                        <div className='stairing h-full w-1/5 bg-black'></div>
                        <div className='stairing h-full w-1/5 bg-black'></div>
                        <div className='stairing h-full w-1/5 bg-black'></div>
                        <div className='stairing h-full w-1/5 bg-black'></div>
                        <div className='stairing h-full w-1/5 bg-black'></div>
                    </div>
                </div>
                <div ref={fullNavLinksRef} className='relative'>
                    <div className='navlink flex w-full justify-between lg:p-5 p-2  items-start'>
                        <div className=''>
                            <div className=' w-30.5'>
                                <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                    <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                                </svg>
                            </div>

                        </div>

                        <div onClick={() => {
                            setNavOpen(false)
                        }} className='lg:h-32 h-20 w-20 lg:w-32 cursor-pointer relative'>
                            <div className='lg:h-44 h-28 lg:w-1 w-0.5   -rotate-45 origin-top absolute bg-[#D3FD50]'></div>
                            <div className='lg:h-44 h-28  lg:w-1 w-0.5 right-0 rotate-45 origin-top absolute bg-[#D3FD50]'></div>
                        </div>

                    </div>

                    <div className='py-20'>
                        <div className='link origin-top relative border-t-1 border-white'>
                            <h1 className='font-[font2] text-5xl lg:text-[8vw] lg:leading-[0.8] lg:pt-8 pt-3 text-center uppercase' translate='no'>Projets</h1>
                            <div className=' movelink absolute text-black flex top-0 bg-[#D3FD50]'>
                                lg:
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-5xl lg:text-[8vw] lg:leading-[0.8] lg:pt-8  pt-4  text-center uppercase' translate='no'>Pour Tout voir</h2>
                                    <img className='lg:h-24 h-14  rounded-full shrink-0 lg:w-64  w-32  object-cover' src={fullnavimg1} />
                                    <h2 className='whitespace-nowrap font-[font2] text-5xl lg:text-[8vw] lg:leading-[0.8] lg:pt-8  pt-4 text-center uppercase' translate='no'>Pour Tout voir</h2>
                                    <img className='lg:h-24 h-14 rounded-full shrink-0 lg:w-64  w-32 object-cover' src={fullnavimg2} />
                                </div>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-5xl lg:text-[8vw] lg:leading-[0.8] lg:pt-8  pt-4 text-center uppercase' translate='no'>Pour Tout voir</h2>
                                    <img className='lg:h-24 h-14 rounded-full shrink-0 lg:w-64  w-32 object-cover' src={fullnavimg1} />
                                    <h2 className='whitespace-nowrap font-[font2] text-5xl lg:text-[8vw] lg:leading-[0.8] lg:pt-8  pt-4 text-center uppercase' translate='no'>Pour Tout voir</h2>
                                    <img className='lg:h-24 h-14 rounded-full shrink-0 lg:w-64  w-32 object-cover' src={fullnavimg2} />
                                </div>

                            </div>




                        </div>

                        <div className='link origin-top relative border-t-1 border-white'>
                            <h1 className='font-[font2] text-5xl lg:text-[8vw] lg:leading-[0.8] lg:pt-8 pt-3 text-center uppercase' translate='no'>Agence</h1>
                            <div className=' movelink absolute text-black flex top-0 bg-[#D3FD50]'>

                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-5xl lg:text-[8vw] lg:leading-[0.8] lg:pt-8  pt-4  text-center uppercase' translate='no'>Pour Tout Savoir</h2>
                                    <img className='lg:h-24 h-14  rounded-full shrink-0 lg:w-64  w-32  object-cover' src={fullnavimg3} />
                                    <h2 className='whitespace-nowrap font-[font2] text-5xl lg:text-[8vw] lg:leading-[0.8] lg:pt-8  pt-4  text-center uppercase' translate='no'>Pour Tout Savoir</h2>
                                    <img className='lg:h-24 h-14  rounded-full shrink-0 lg:w-64  w-32  object-cover' src={fullnavimg4} />
                                </div>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-5xl lg:text-[8vw] lg:leading-[0.8] lg:pt-8  pt-4  text-center uppercase' translate='no'>Pour Tout Savoir</h2>
                                    <img className='lg:h-24 h-14  rounded-full shrink-0 lg:w-64  w-32  object-cover' src={fullnavimg3} />
                                    <h2 className='whitespace-nowrap font-[font2] text-5xl lg:text-[8vw] lg:leading-[0.8] lg:pt-8  pt-4  text-center uppercase' translate='no'>Pour Tout Savoir</h2>
                                    <img className='lg:h-24 h-14  rounded-full shrink-0 lg:w-64  w-32  object-cover' src={fullnavimg4} />
                                </div>

                            </div>




                        </div>

                        <div className='link origin-top relative border-t-1 border-white'>
                            <h1 className='font-[font2] text-5xl lg:text-[8vw] lg:leading-[0.8] lg:pt-8 pt-3 text-center uppercase' translate='no'>Contact</h1>
                            <div className=' movelink absolute text-black flex top-0 bg-[#D3FD50]'>

                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-5xl lg:text-[8vw] lg:leading-[0.8] lg:pt-8  pt-4  text-center uppercase' translate='no'>Pour Envoyer Un Fax</h2>
                                    <img className='lg:h-24 h-14  rounded-full shrink-0 lg:w-64  w-32  object-cover' src={fullnavimg5} />
                                    <h2 className='whitespace-nowrap font-[font2] text-5xl lg:text-[8vw] lg:leading-[0.8] lg:pt-8  pt-4  text-center uppercase' translate='no'>Pour Envoyer Un Fax</h2>
                                    <img className='lg:h-24 h-14  rounded-full shrink-0 lg:w-64  w-32  object-cover' src={fullnavimg5} />
                                </div>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-5xl lg:text-[8vw] lg:leading-[0.8] lg:pt-8  pt-4  text-center uppercase' translate='no'>Pour Envoyer Un Fax</h2>
                                    <img className='lg:h-24 h-14  rounded-full shrink-0 lg:w-64  w-32  object-cover' src={fullnavimg5} />
                                    <h2 className='whitespace-nowrap font-[font2] text-5xl lg:text-[8vw] lg:leading-[0.8] lg:pt-8  pt-4  text-center uppercase' translate='no'>Pour Envoyer Un Fax</h2>
                                    <img className='lg:h-24 h-14  rounded-full shrink-0 lg:w-64  w-32  object-cover' src={fullnavimg5} />
                                </div>

                            </div>




                        </div>


                        <div className='link origin-top relative border-y-1 border-white'>
                            <h1 className='font-[font2] text-5xl lg:text-[8vw] lg:leading-[0.8] lg:pt-8 pt-3 text-center uppercase' translate='no'>Blogue</h1>
                            <div className=' movelink absolute text-black flex top-0 bg-[#D3FD50]'>

                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-5xl lg:text-[8vw] lg:leading-[0.8] lg:pt-8  pt-4  text-center uppercase' translate='no'>Lire Les Articles</h2>
                                    <img className='lg:h-24 h-14  rounded-full shrink-0 lg:w-64  w-32  object-cover' src={fullnavimg6} />
                                    <h2 className='whitespace-nowrap font-[font2] text-5xl lg:text-[8vw] lg:leading-[0.8] lg:pt-8  pt-4  text-center uppercase' translate='no'>Lire Les Articles</h2>
                                    <img className='lg:h-24 h-14  rounded-full shrink-0 lg:w-64  w-32  object-cover' src={fullnavimg7} />
                                </div>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-5xl lg:text-[8vw] lg:leading-[0.8] lg:pt-8  pt-4  text-center uppercase' translate='no'>Lire Les Articles</h2>
                                    <img className='lg:h-24 h-14  rounded-full shrink-0 lg:w-64  w-32  object-cover' src={fullnavimg6} />
                                    <h2 className='whitespace-nowrap font-[font2] text-5xl lg:text-[8vw] lg:leading-[0.8] lg:pt-8  pt-4  text-center uppercase' translate='no'>Lire Les Articles</h2>
                                    <img className='lg:h-24 h-14  rounded-full shrink-0 lg:w-64  w-32  object-cover' src={fullnavimg7} />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default FullScreenNav