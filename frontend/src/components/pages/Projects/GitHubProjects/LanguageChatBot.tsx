import GitHubRepo from "./GitHubRepo"

const LanguageChatBot: React.FC = () => {

    return (
        <div
            className='language-learning-chatbot'
        >
            <h2
                className='project-header'
            >
                Web Chatbot for Learning Japanese
            </h2>
            <p
                className='project-description'
            >
                An interactive chatbot for learning Japanese, built
                with pretrained NLP models. It supports free-form
                translation, grammar correction, and conversation by
                dynamically handling words, phrases, and sentences
                without relying on a fixed knowledge base.
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
                            FastAPI
                        </li>
                        <li>
                            Uvicorn
                        </li>
                    </ul>

                </div>
                <div
                    className='nlp-models'
                >
                    <p>
                        NLP Models:
                    </p>
                    <ul>
                        <li>
                            Hugging Face Transformers
                        </li>
                        <li>
                            Conversation model:
                            rinna/japanese-gpt2-medium
                        </li>
                        <li>
                            Translation model:
                            RichardErkhov/webbigdata_-_ALMA-7B-Ja-V2-gguf
                        </li>
                        <li>
                            Grammar model:
                            shozuru/t5-japanese-grammar-corrector
                        </li>
                    </ul>
                </div>
            </div>

            <GitHubRepo
                link='https://github.com/shozuru/japanese-chatbot'
            />
        </div>
    )
}

export default LanguageChatBot