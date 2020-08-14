import {useState} from 'react'

export const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues)

    const onChange = (name, value) => {
        setForm({...form, [name]: value})
    }

    const resetForm = () => {
        setForm(initialValues)
    }

    const clickShowPassword = () => {
        setForm({...form, showPassword: !form.showPassword})
    }

    const mouseDownPassword = (event) => {
        event.preventDefault()
    }

    return{
        form,
        onChange,
        resetForm,
        clickShowPassword,
        mouseDownPassword
    }
}