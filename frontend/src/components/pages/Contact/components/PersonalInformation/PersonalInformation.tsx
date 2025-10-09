import './PersonalInformation.css'

const PersonalInformation: React.FC = () => {

    return (

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
                    Based in the DMV
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
                    Eastern Standard Time
                </span>
            </p>
        </div>
    )
}

export default PersonalInformation