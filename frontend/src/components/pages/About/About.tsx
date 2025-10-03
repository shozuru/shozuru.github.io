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
                            accessibility and education. My interests are in
                            designing applications that support language
                            learning in ways that are both linguistically
                            accurate  and user-friendly, bridging theory with
                            real-world usability. I am particularly interested
                            in projects at the intersection of natural language
                            processing, education, and technology, and I enjoy
                            creating products that make language more
                            approachable for a general audience.
                        </p>

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
                            have real-world impact. My background in linguistics
                            provides me with unique insights into natural
                            language processing and educational technology,
                            helping me design systems that use the right
                            metrics and approaches to handle the complexity of
                            language. Looking ahead, I aim to grow at the
                            intersection of edtech, NLP, and AI for language
                            accessibility.
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
                            through watching documentaries, and understanding
                            different perspectives and ways of life. I also
                            practice Japanese through reading and conversation.
                            In my work, I am driven by a desire to make the
                            user experience more data-accurate and meaningful.
                            I am passionate about building language technology
                            because learning languages can broaden the mind,
                            challenge previously held assumptions, and open new
                            opportunities for people. I see technology as a way
                            to make these experiences more accessible.
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