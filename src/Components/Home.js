import React from 'react'
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import DisplaySection from './DisplaySection/DisplaySection'
import FeatureProducts from './FeatureProducts/FeatureProducts'
import Advertisement from './Advertisement/Advertisement'
import { TopSell } from './TopSell/TopSell'
import { Blog } from './Blog/Blog'
import { Brands } from './Brands/Brands'
import { Footer } from './Footer/Footer'

export default function Home() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <DisplaySection/>
        <FeatureProducts />
        <Advertisement/>
        <TopSell/>
        <Blog/>
        <Brands/>
        <Footer/>
    </div>
  )
}
