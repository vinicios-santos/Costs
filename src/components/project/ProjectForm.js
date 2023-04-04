import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

export default function projectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input type="text" text="Project Name" name="name" placeholder="Project name" />
            <Input type="number" text="Total budget" name="name" placeholder="Total budget" />
            <Select name="category_id" text="Select category"></Select>
            <SubmitButton text={btnText}/>
        </form>
    )
}