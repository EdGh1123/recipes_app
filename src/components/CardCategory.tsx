import React from 'react'
import '../styles/card-category.scss';

const CardCategory = () => {
  return (
    <div className="section-category">
        <div className='card-category'>
            <img className='img-category' src="../../assets/icons/ic_vegetarian.svg" alt="category-img" />
            <p className='lbl-category'>Vegetarianos</p>
        </div>
        <div className='card-category'>
            <img className='img-category' src="../../assets/icons/ic_main.svg" alt="category-img" />
            <p className='lbl-category'>Principales</p>
        </div>
        <div className='card-category'>
            <img className='img-category' src="../../assets/icons/ic_cake.svg" alt="category-img" />
            <p className='lbl-category'>Tortas</p>
        </div>
        <div className='card-category'>
            <img className='img-category' src="../../assets/icons/ic_fast-food.svg" alt="category-img" />
            <p className='lbl-category'>Rápida</p>
        </div>
        <div className='card-category'>
            <img className='img-category' src="../../assets/icons/ic_kids.svg" alt="category-img" />
            <p className='lbl-category'>Menú Niños</p>
        </div>
        <div className='card-category'>
            <img className='img-category' src="../../assets/icons/ic_soup.svg" alt="category-img" />
            <p className='lbl-category'>Sopas</p>
        </div>
    </div>
  )
}

export default CardCategory