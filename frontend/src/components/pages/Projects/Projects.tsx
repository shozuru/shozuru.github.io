import LanguageChatBot from './GitHubProjects/LanguageChatBot'
import QaApp from './GitHubProjects/QaApp'
import WiktionaryApp from './GitHubProjects/WiktionaryApp'
import './Projects.css'

const Projects: React.FC = () => {

    return (

        <div
            className="projects-page-container"
        >
            <header
                className="projects-page-header"
            >
                <h1>
                    Projects
                </h1>
            </header>

            <main
                className="main-projects-page-container"
            >
                <WiktionaryApp />

                <QaApp />

                <LanguageChatBot />

            </main>
        </div>
    )
}

export default Projects