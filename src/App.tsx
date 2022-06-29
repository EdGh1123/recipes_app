import React from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import RecipesSection from './components/RecipesSection'
import Footer from './components/Footer'
import CardCategory from './components/CardCategory'

function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <RecipesSection />
      <Footer />
    </div>
  )
}

export default App
