import GitHubRepo from "./GitHubRepo";

const QaApp: React.FC = () => {

    return (

        <div
            className='qa-app-container'
        >
            <h2
                className='project-header'
            >
                Question-Answer Text Web Application
            </h2>
            <p
                className='project-description'
            >
                A question-answering application powered by DistilBERT
                (distilbert-base-cased-distilled-squad). Users input a
                passage and a question, and the system generates a
                context-aware answer drawn directly from the text.
            </p>
            <div
                className='tools-container'
            >
                <h3
                    className='tools-header'
                >
                    Tools used:
                </h3>
                <div
                    className='frontend-tools'
                >
                    <p>
                        Frontend:
                    </p>
                    <ul>
                        <li>
                            React
                        </li>
                        <li>
                            Axios
                        </li>
                    </ul>
                </div>

                <div
                    className='backend-tools'
                >
                    <p>
                        Backend:
                    </p>

                    <ul>
                        <li>
                            Uvicorn
                        </li>
                        <li>
                            FastAPI
                        </li>
                        <li>
                            Hugging Face Transformers
                        </li>
                        <li>
                            PyTorch
                        </li>
                    </ul>
                </div>
            </div>

            <GitHubRepo
                link='https://github.com/shozuru/qa-text-application'
            />
        </div>
    )
}

export default QaApp