import React from 'react'
import '../Style/Xp.css'
function Xp() {
  return (
    <section className='xp'>
        <div className='container'>
            <div className='xp__wrapper'>
                <div className='xp__content'>
                    <h2>
                    Хотите посмотреть?
                    </h2>
                    <p>
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. 
                    </p>
                </div>
                <div className='xp__btn'>
                    <button className='xp__btn1'>
                        Ваше имя
                    </button>
                    <button className='xp__btn1'>
                        Ваш телефон
                    </button>
                    <p>
                    *Мы никому не передаем ваши данные. 
                    И не сохраняем ваш номер в базу.
                    </p>
                    <button className='xp__btn2'>
                        Посмотреть район
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Xp