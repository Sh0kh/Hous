import React from 'react'
import '../Style/Footer.css'
import footer_1 from '../Image/footer_1.png'
import footer_2 from '../Image/footer_2.png'
import footer_3 from '../Image/footer_3.png'
import footer_4 from '../Image/footer_4.png'
function Footer() {
  return (
    <footer>
        <div className='container'>
            <div className='footer__wrapper'>
                <div className='footer__logo'>
                    <h1>
                    HouseVOP
                    </h1>
                    <p>
                    ЖИЛОЙ КОМПЛЕКС
                    </p>
                </div>
                <ul>
                    <li>
                    О комплексе
                    </li>
                    <li>
                    Район
                    </li>
                    <li>
                    Каталог квартир
                    </li>
                    <li>
                    Ипотека
                    </li>
                    <li>
                    Контакты
                    </li>
                </ul>
                <ul>
                    <li>
                    О комплексе
                    </li>
                    <li>
                    Район
                    </li>
                    <li>
                    Каталог квартир
                    </li>
                    <li>
                    Ипотека
                    </li>
                    <li>
                    Контакты
                    </li>
                </ul>
                <ul>
                    <li>                        
                    Адрес: Наб. реки Фонтанки 10-15
                    </li>
                    <li>                        
                    Телефон: 8 (812) 123-45-67
                    </li>
                    <li>                        
                    Отдел продаж: 10:00 - 20:00
                    </li>
                    <li>                        
                    E-mail: vip@housevip.ru
                    </li>
                    <li className='footer__icon'>                        
                        <img src={footer_1} alt="" />
                        <img src={footer_2} alt="" />
                        <img src={footer_3} alt="" />
                        <img src={footer_4} alt="" />
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer