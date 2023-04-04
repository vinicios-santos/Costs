import person from '../../img/vinicios.png'
import styles from './Contact.module.css'

export default function Contact() {
    return (
    <div className={styles.contact}>
    <h1>Contact</h1>
    <h2>Vinicios Santos</h2>
    <img src={person}/>
    </div>
    )
}