import React from 'react'
import '../Style/Header.css'
function Header() {
  return (
    <header>
        <div className='container'>
            <div className='header__wrapper'>
                <div className='header__logo'>
                    <h1>
                     HouseVOP
                    </h1>
                    <p>
                        ЖИЛОЙ КОМПЛЕКС
                    </p>
                </div>
                <nav >
                    <ul className='header__ul'>
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
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header