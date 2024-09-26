import React from 'react'
import Hero from '../commponets/Hero/Hero'
import Popular from '../commponets/Popular/Popular'
import Offers from '../commponets/Offers/Offers'
import NewCollectionsComponent from '../commponets/NewCollections/NewCollections'
import NewsLetter from '../commponets/NewsLetter/NewsLetter'
import Footer from '../commponets/Footer/Footer'

const Shop1 = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
    <NewCollectionsComponent/>
    <NewsLetter/>
    </div>
  )
}



export default Shop1