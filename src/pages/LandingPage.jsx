import React from 'react'
import { Navbar } from '../components/Navbar'
import { Header } from '../components/Header'
import { EktshfFeatures } from '../components/EktshfFeatures'
import { DiscoverDestinations } from '../components/DiscoverDestinations'
import { EktshfServices } from '../components/EktshfServices'
import { AboutUsSection } from '../components/AboutUsSection'
import { PlacesInEgypt } from '../components/PlacesInEgypt'
import { DownloadApp } from '../components/DownloadApp'
import { Reviews } from '../components/Reviews'

export const LandingPage = () => {
  return (
    <>
        <Header/>
        <EktshfFeatures/>
        <DiscoverDestinations/>
        <EktshfServices/>
        <AboutUsSection/>
        <PlacesInEgypt/>
        <DownloadApp/>
        <Reviews/>
    </>
  )
}
