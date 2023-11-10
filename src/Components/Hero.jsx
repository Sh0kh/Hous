import React from 'react'
import '../Style/Hero.css'
import hero__1 from '../Image/hero_1.png'
import hero__2 from '../Image/hero_2.png'
import hero__3 from '../Image/hero_3.png'

function Hero() {
  return (
    <section className='hero'>
        <div className='container'>
            <h1 > 
            Жилой комплекс 
            в историческом центре
            </h1>
            <img className='hero__img' src={hero__1} alt="" />
            <div className='hero__wrapper'>
                <span>
                <img src={hero__2} alt="" />  Наб. реки Фонтанки 10-15
                </span>
                <span>
                    <img src={hero__3} alt="" /> 8 (812) 123-45-67
                </span>
            </div>
        </div>
    </section>
  )
}

export default Hero