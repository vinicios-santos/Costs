import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

export default function NewProject(){
    return (
        <div className={styles.newproject_container}>
            <h1>New Project</h1>
            <p>Create your project to add the service</p>
            <ProjectForm btnText="Create project"/>
        </div>
    ) 
        
}