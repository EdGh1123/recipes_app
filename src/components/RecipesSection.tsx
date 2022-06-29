import React, { useEffect } from 'react'
import Card from './Card'
import '../styles/recipes-section.scss'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { selectRecipes } from '../features/recipes/recipesSlice'

const RecipesSection = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(selectRecipes())
  }, [dispatch])

  const recipes = useAppSelector((state) => state.recipes.recipes)

  return (
    <section className='recipes-section'>
      <h2 className='title'>Nuevas Recetas</h2>
      <div className="section-recipes">
        <div className='list-card'>
          {recipes.map((value, index) => {
            return <Card props={value} key={index}/>
          })}
        </div>
      </div>
    </section>
  )
}

export default RecipesSection
