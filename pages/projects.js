import ContainerBlock from "@/components/ContainerBlock";
import ProjectsComponent from "@/components/ProjectsComponent";

const Projects = () => {
    return ( 
        <ContainerBlock>
            <ProjectsComponent home={false}/>
        </ContainerBlock>
     );
}
 
export default Projects;