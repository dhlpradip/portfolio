
import ContainerBlock from '@/components/ContainerBlock'
import AboutComponent from '@/components/aboutComponent'
import Hero from '@/components/Hero'
import { useRouter } from 'next/router'
import ExperienceComponent from '@/components/ExperienceComponent'
import ProjectsComponent from '@/components/ProjectsComponent'
import ContactComponent from '@/components/ContactComponent'

export default function Home() {
  const router = useRouter()
  return (
    <ContainerBlock
    title="Pradeep Dahal - Engineer, Developer, Writer, Bibliophile"
    description="Welcome to my little nook filled with passion, positivity and poetry."
  >
    <Hero />
    <AboutComponent />
    <ProjectsComponent home/>
    <ExperienceComponent />
    <ContactComponent />
  </ContainerBlock>
   
  )
}
