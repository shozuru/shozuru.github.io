import { useState } from 'react'
import './ContactForm.css'

interface FormInfo {
    name: string
    email: string,
    message: string
}

const ContactForm: React.FC = () => {

    const [formData, setFormData] = useState<FormInfo>({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> |
        React.ChangeEvent<HTMLTextAreaElement>) => {

        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()

        const emptyField = Object.values(formData).some(value => value === "")

        if (emptyField) {

            const inputName =
                document.getElementById('input-name') as HTMLElement
            formData.name === "" ? inputName.style.borderColor = "red" :
                inputName.style.border = ""

            const inputEmail =
                document.getElementById('input-email') as HTMLElement
            formData.email === "" ? inputEmail.style.borderColor = "red" :
                inputEmail.style.border = ""

            const inputMessage =
                document.getElementById('input-message') as HTMLElement
            formData.message === "" ? inputMessage.style.borderColor = "red" :
                inputMessage.style.border = ""

            alert("Please fill in the fields in red.")

        } else {
            const form = new FormData()
            Object.entries(formData).forEach(([key, value]) =>
                form.append(key, value))

            try {
                const response = await fetch("https://getform.io/f/bolzwvma",
                    {
                        method: "POST",
                        body: form
                    }
                )

                if (response.ok) {
                    alert("Message has been sent!")
                    setFormData(
                        {
                            name: "",
                            email: "",
                            message: ""
                        }
                    )
                } else {
                    alert("Failed to send message.")
                }

            } catch (error) {
                console.log(error)
                alert('Error sending message.')
            }
        }
    }

    return (

        <div
            className='contact-form-container'
        >
            <h3>
                Send me a message!
            </h3>
            <form
                className='input-form'
            >
                <p>
                    Name:
                </p>

                <input
                    name='name'
                    id='input-name'
                    className='input-name'
                    value={formData.name}
                    onChange={handleChange}
                />
                <p>
                    Email:
                </p>
                <input
                    name='email'
                    id='input-email'
                    className='input-email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <p>
                    Message:
                </p>
                <textarea
                    name='message'
                    id='input-message'
                    className='input-message'
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    cols={30}
                />
                <input
                    type='submit'
                    className='submit-button'
                    value='Send message'
                    onClick={handleSubmit}
                />
            </form>
        </div>
    )
}

export default ContactForm
