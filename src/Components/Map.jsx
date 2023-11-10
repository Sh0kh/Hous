import React from 'react'
import '../Style/Map.css'
function Map() {
  return (
    <section className='map'>
        <div className='container'>
            <h2>
                Район на карте
            </h2>
            <iframe className='map__1' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8979.929122104111!2d37.613517819366926!3d55.7588100166344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2s!4v1699565453060!5m2!1sru!2s"></iframe>
        </div>
    </section>
  )
}

export default Map