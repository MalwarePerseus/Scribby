import Head from 'next/head'
import Image from 'next/image'
import { ContainerBlock, Hero } from '../components/'

export default function Home() {
  return (
      <ContainerBlock 
        title='Scribby | Subscription Manager ' 
        description = 'Scribby is a subscription manager which integrates all your subscriptions and lets you keep track of your use cycle to save as much as possible.'
      >
        <Hero />
      </ContainerBlock>
      
  ) 
}
