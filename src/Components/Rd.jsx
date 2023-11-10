import React from 'react'
import '../Style/Rd.css'
import RdCard from '../Small components/RdCard'
import rd1 from '../Image/rd1.png'
import rd2 from '../Image/rd2.png'
import rd3 from '../Image/rd3.png'
import rd4 from '../Image/rd4.png'
import rd5 from '../Image/rd5.png'

function Rd() {
  return (
    <section className='Rd'>
        <div className='container'>
            <div className='rd__wrapper'>
                <RdCard img={rd1}
                text='Рядом исторические
                парки и скверы'/>
              
                <RdCard img={rd2}
                text='Полностью
                обустроенный'/>
              
                <RdCard img={rd3}
                text='10 фонтанов
                на территории'/>
              
                <RdCard img={rd4}
                text='6 км
                велодорожек'/>
              
            </div>
            <img className='rd__bg' src={rd5} alt="" />
        </div>
    </section>
  )
}

export default Rd