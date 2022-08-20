import type { NextPage } from 'next'
import style from '../styles/Header.module.sass'

const Header = () => {

    return (
        <div className={style.HeaderContainer}>
            <div className={style.HeaderLeft}>
                <a href="">Home</a>
                <a href="">Browse Pokemons</a>
            </div>
            <div className={style.HeaderLogo}><img src='/resources/Logo.png'></img></div>
            <div className={style.HeaderRight}>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
        </div>
    )
}

export default Header


