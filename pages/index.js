import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import ContainerBlock from '@/components/ContainerBlock'
import AboutComponent from '@/components/aboutComponent'
import Hero from '@/components/Hero'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  return (
    <ContainerBlock
    title="Pradeep Dahal - Engineer, Developer, Writer, Bibliophile"
    description="Welcome to my little nook filled with passion, positivity and poetry."
  >
    <Hero />
    <AboutComponent />
  </ContainerBlock>
   
  )
}
