import { useState } from 'react'
import './contact.css'

interface FormInfo {
    name: string
    email: string,
    message: string
}

const Contact: React.FC = () => {

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

    return (

        <div
            className='contact-page-container'
        >
            <header
                className="contact-page-header"
            >
                <h1>
                    Contact
                </h1>
            </header>

            <main>
                <div
                    className='main-contact-page-container'
                >
                    <div
                        className="personal-information"
                    >
                        <p>
                            Email:
                            <a
                                className='email'
                                href='mailto:andrewamadeo411@gmail.com'
                            >
                                andrewamadeo411@gmail.com
                            </a>
                        </p>
                        <p>
                            <span
                                className='linkedIn-tag'
                            >
                                LinkedIn:
                            </span>
                            <span
                                className='linkedIn-details'
                            >
                                <a
                                    className='linkedIn-link'
                                    href='https://linkedin.com/in/andrew-amadeo-79013b388'
                                >
                                    Andrew Amadeo
                                </a>
                            </span>
                        </p>
                        <p>
                            <span
                                className='location-tag'
                            >
                                Location:
                            </span>
                            <span
                                className='location-details'
                            >
                                Based in the DMV.
                            </span>
                        </p>
                        <p>
                            <span
                                className='time-zone-tag'
                            >
                                Timezone:
                            </span>
                            <span
                                className='time-zone-details'
                            >
                                Eastern Standard Time.
                            </span>
                        </p>
                    </div>

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
                                className='input-name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <p>
                                Email:
                            </p>
                            <input
                                name='email'
                                className='input-email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <p>
                                Message:
                            </p>
                            <textarea
                                name='message'
                                className='input-message'
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                required
                            />
                            <input
                                type='submit'
                                className='submit-button'
                                value='Send message'
                                onClick={handleSubmit}
                            />
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Contact