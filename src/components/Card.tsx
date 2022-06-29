import React, { useState } from 'react'
import '../styles/card.scss'

export interface RecipesState {
  id: number
}

const Card = (props:any) => {
  const [isHover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const recipe = props.props;
  const isVegan = (recipe.vegan === true)? 'Vegano' : 'No vegano';

  const handleMouseLeave = () => {
    setHover(!isHover)
  }
  return (
    <div
      className={!isHover ? 'card' : 'card active'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='img-contain'>
        <img src={recipe.image} className="img-recipe" alt='Receta' />
      </div>
      {!isHover ? (
        <p className='paragraph'>
          <span className='title-recipe'>{recipe.title} </span>
          <span className='subtitle-recipe'>{isVegan}</span>
        </p>
      ) : (
        <div className='paragraph'>
          <div className='mb-2'>
            <img src='../../assets/icons/ic_portion.svg' alt='portion' />
            <p className='title-detail'>Tamaño de porción</p>
            <p className='description-detail'>{recipe.servings} raciones</p>
          </div>
          <div className='mb-2'>
            <img src='../../assets/icons/ic_time.svg' alt='portion' />
            <p className='title-detail'>Tiempo de preparación</p>
            <p className='description-detail'>{recipe.readyInMinutes} minutos</p>
          </div>
          <div className='mb-2'>
            <img src='../../assets/icons/ic_chef.svg' alt='portion' />
            <p className='title-detail'>Ingredientes</p>
            <p className='description-detail'>{recipe.extendedIngredients.length}</p>
          </div>
        </div>
      )}
      {!isHover && (
        <div className='card-footer'>
          <div className='star-box'>
            <img src='../../assets/star.svg' alt='star' width='24' />
            <span>{recipe.healthScore}%</span>
          </div>
          <div className='star-box'>
            <img src='../../assets/heart.svg' alt='heart' />
            <span>{recipe.aggregateLikes}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Card
