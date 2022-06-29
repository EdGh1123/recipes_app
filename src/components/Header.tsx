import React from 'react'
import '../styles/header.scss';

const Header = () => {
  return (
    <header className='header'>
        <div>
            <span className='name-logo'>Recipe</span><span className='subname-logo'>App</span>
        </div>
        <nav className='nav'>
            <a className='nav-item' href="#home">Home</a>
            <a className='nav-item' href="#vegetarianos">Vegetarianos</a>
            <a className='nav-item' href="#platos-principales">Platos Principales</a>
            <a className='nav-item' href="#tortas">Tortas</a>
            <a className='nav-item' href="#comida-rapida">Comida Rápida</a>
            <a className='nav-item' href="#menu-niños">Menu Niños</a>
        </nav>
        <img className='home' src="../../assets/icons/ic_home.svg" alt="Home" />
    </header>
  )
}

export default Header