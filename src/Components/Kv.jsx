import React from 'react'
import '../Style/Kv.css'
import kv3 from '../Image/kv3.png'
function Kv() {
  return (
    <section className='kv'>
        <div className='container'>
            <h2>
              Наши квартиры
            </h2>
            <div className='kv__grid'>
                <div className='kv__card1'>
                    <h3>
                        Лифт — 3 этажа
                    </h3>
                </div>
                <div className='kv__card2'>
                    <h3>
                        Лифт — 2 этажа
                    </h3>
                </div>
                <div className='kv__card1'>
                    <h3>
                        Лифт — 3 этажа
                    </h3>
                </div>
                <div className='kv__card2'>
                    <h3>
                        Лифт — 2 этажа
                    </h3>
                </div>
            </div>
            <img className='kv__bg' src={kv3} alt="" />
        </div>
    </section>
  )
}

export default Kv