import React from 'react'
import '../Style/Video.css'
import vd1 from '../Image/vd_1.png'
import vd2 from '../Image/vd_2.png'
function Video() {
  return (
    <section className='video'>
        <div className='container'>
            <img className='video__img' src={vd1} alt="" />
            <img className='vd__bg' src={vd2} alt="" />
        </div>
    </section>
  )
}

export default Video