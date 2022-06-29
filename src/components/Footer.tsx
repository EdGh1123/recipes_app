import React from 'react'
import '../styles/footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
        <p className='title-footer'>Con el patrocinio de</p>
        <img className='sponsors' src="../../assets/sponsors.png" width="250" alt="Patrocinios" />
    </footer>
  )
}

export default Footer