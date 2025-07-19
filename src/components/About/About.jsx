import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt'
import ProfileImage from '../../assets/WhatsApp Image 2025-05-08 at 4.03.07 PM.jpeg'
import Resume from '../../assets/Bhupesh_Joshi_MCA-.pdf'

const about = () => {
    return (
        <section
            id='about'
            className='py-4 px-[7vw] md:px-[7vw] lg:px-[13vw] font-sans mt-16 md:mt-24 lg:mt-32'>

            <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
                {/* left side */}
                <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
                    {/* Greetings */}
                    <div className=''>
                        <h1 
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
                            Hi, I am
                        </h1>
                        {/* name */}
                        <h2 
                            data-aos="zoom-out"
                            data-aos-duration="500"
                            data-aos-delay="100"
                            className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
                            Bhupesh Joshi
                        </h2>
                        {/* skills heading with typing effect */}
                        <h3 
                            data-aos="zoom-out"
                            data-aos-duration="500"
                            data-aos-delay="100"
                            className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
                            <span className='text-white'>
                                I am a
                            </span>

                            <Typewriter
                                words={[' Full Stack Developer', ' Frontend Developer', ' React Developer']}
                                loop={Infinity}
                                cursor
                                cursorStyle='|'
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />

                        </h3>
                        <div>

                        {/* About me Para */}
                        <p 
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="100"
                            className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
                            I am a Front-End developer expertise is to create
                            building scalable web applications. Skilled in both front-end and
                            back-end development, I specialize in the Front-End and other
                            modern technologies to create seamless user experiences and
                            efficient solutions.
                        </p>

                        {/* Resume button */}
                        <a
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="300"
                            href={Resume} 
                            download
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
                            style={{
                                background: "liner-gradient(90deg, #8245ec, #a855f7)",
                                boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec"
                            }}
                        >
                            Download CV
                        </a>
                        </div>
                    </div>


                </div>
                    {/* Right side  */}
                    <div
                        data-aos= 'zoom-in'
                        className='md:w-1/2 flex justify-center md:justify-end'>
                        <Tilt
                            className='w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full'
                            tiltMaxAngleX={20}
                            tiltMaxAngleY={20}
                            perspective={1000}
                            scale={1.05}
                            transitionSpeed={1000}
                            gyroscope={true}
                        >
                        <img 
                            
                            src={ProfileImage}
                            alt="profile" 
                            className='w-ful h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'
                        />
                        </Tilt>
                    </div>
            </div>

        </section>
    )
}

export default about
