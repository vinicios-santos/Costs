
import { useState, useEffect } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

export default function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data)
      })
  }, [])

    return (
        <form className={styles.form}>
            <Input type="text" text="Project Name" name="name" placeholder="Project name" />
            <Input type="number" text="Total budget" name="name" placeholder="Total budget" />
            <Select name="category_id" text="Select category" options={categories}></Select>
            <SubmitButton text={btnText} />
        </form>
    )
}