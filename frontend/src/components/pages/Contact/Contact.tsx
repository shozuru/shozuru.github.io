import './contact.css'
import PersonalInformation from './components/PersonalInformation/PersonalInformation'
import ContactForm from './components/ContactForm/ContactForm'

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
                    <PersonalInformation />

                    <ContactForm />

                </div>
            </main>
        </div>
    )
}

export default Contact