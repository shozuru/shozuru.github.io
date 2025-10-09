import './About.css'

const About: React.FC = () => {

    return (

        <div
            className="about-page-container"
        >
            <header
                className="about-page-header"
            >
                <h1>
                    About
                </h1>
            </header>
            <main
                className="main-about-page-container"
            >
                <div
                    className='about-info'
                >
                    <div
                        className='general-info'
                    >
                        <h3>
                            About Me
                        </h3>
                        <p>
                            I am an aspiring software engineer with a
                            background in linguistics, passionate about
                            developing technology that enhances language
                            learning and accessibility. My interests are in
                            designing applications that support language
                            growth in ways that are linguistically
                            accurate and yet still intuitive, bridging the gap
                            between theory and real-world applicability. I am
                            particularly interested in projects at the
                            intersection of natural language processing,
                            education, and machine-learning, and I enjoy
                            creating products that make language learning more
                            approachable to people.
                        </p>

                        <a
                            className='resume-link'
                            href='/resume/Resume_Amadeo_2025.pdf'
                            download
                        >
                            <button
                                className='resume-button'
                            >
                                Download my resume
                            </button>
                        </a>
                    </div>

                    <div
                        className='professional-background'
                    >
                        <h3>
                            My Professional Background
                        </h3>
                        <p>
                            I hold a B.A. in Linguistics from Cornell University
                            and am transitioning into software engineering
                            through self-study and hands-on projects. I am most
                            comfortable with Python, TypeScript, HTML/CSS, and
                            React, with additional experience in Node.js,
                            FastAPI, Java, MongoDB, and CRUD-based backends. My
                            work includes projects such as a multilingual
                            vocabulary tool powered by Wiktionary data, a
                            chatbot for learning Japanese, and an ML-based
                            text question-answering system.
                        </p>
                        <p>
                            I am especially drawn to building applications that
                            have a real impact in terms of user-experience. My
                            background in linguistics provides me with unique
                            insights into natural language processing and the
                            ways second language is acquired, both of which
                            help me design systems that use the right metrics
                            and approaches to handle the complexity of
                            language, while being approachable to those who do
                            not have an extensive background in linguistics.
                            Looking ahead, I want to learn more about edtech,
                            NLP, and the ways that AI can be used to make
                            language learning more effective.
                        </p>
                    </div>
                    <div
                        className='current-interests'
                    >
                        <h3>
                            My Current Interests
                        </h3>
                        <p>
                            Using NLP and Machine Learning to make language
                            learning a more accessible experience!
                        </p>

                    </div>
                    <div
                        className='personal-hobbies'
                    >
                        <h3>
                            My Philosophy
                        </h3>
                        <p>
                            Outside of coding, I love learning about the world
                            through watching documentaries, engaging with
                            people from all walks of life, and learning about
                            different perspectives. I have a particular
                            interest in the Japanese language and Japanese
                            culture and I make an effort to practice
                            Japanese daily through reading and conversation. In
                            my work, I am driven by a desire to be thorough and
                            diligent, while making sure to keep a clear
                            perspective of the bigger picture. I am passionate
                            about building language technology because I
                            believe learning languages can broaden the mind,
                            challenge previously held assumptions, and open
                            doors to new opportunities. I see technology as a
                            way to make these opportunities more accessible.
                        </p>

                    </div>
                    <div
                        className='contact-me'
                    >
                        <p>
                            I am actively pursuing roles that combine
                            linguistics and technology. Feel free to contact me
                            if you think I might be a good fit for your team.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default About