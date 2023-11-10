import React from 'react'
import '../Style/Que.css'
function Que() {
  return (
    <section className='Que'>
        <div className='container'>
            <h2>
                Есть вопросы?
            </h2>
            <div className='que__grid'>
                <p>
                *Мы никому не передаем ваши данные. 
                И не сохраняем ваш номер в базу.
                </p>
                <button className='xp__btn1'>
                 Ваше имя
                </button>
                <button className='xp__btn1'>
                 Ваш телефон
                </button>
                <button className='xp__btn2'>
                    Посмотреть район
                </button>
            </div>
        </div>
    </section>
  )
}

export default Que