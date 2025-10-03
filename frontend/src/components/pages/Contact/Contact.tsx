import './contact.css'

const Contact: React.FC = () => {

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
                                type='text'
                                className='input-name'
                            />
                            <p>
                                Email:
                            </p>
                            <input
                                type='text'
                                className='input-email'
                            />
                            <p>
                                Message:
                            </p>
                            <textarea
                                className='input-message'
                                rows={5}
                            />
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Contact