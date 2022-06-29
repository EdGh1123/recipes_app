import React from 'react'
import '../styles/banner.scss';
import CardCategory from './CardCategory';

const Banner = () => {
  return (
    <div className='banner'>
        <h1 className='text-banner'>
            <span className='title-banner'>Recetas </span><br />
            <span className='subtitle-banner'>para todos</span>
        </h1>
        <CardCategory/>
    </div>
  )
}

export default Banner