import Head from 'next/head'
import Image from 'next/image'
import { Navbar, Hero } from '../components/'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}
