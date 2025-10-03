import GitHubRepo from "./GitHubRepo"

const WiktionaryApp: React.FC = () => {

    return (
        <div
            className='wiktionary-app'
        >
            <h2
                className='project-header'
            >
                Wiktionary Lookup Web Application
            </h2>

            <p
                className='project-description'
            >
                A vocabulary explorer that highlights the most frequent
                words in French, Brazilian Portuguese, Korean, Italian,
                and Danish, with live Wiktionary lookups for
                pronunciation, part of speech, and definitions.
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
                    className='frontend-tools'>
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
                            Node.js
                        </li>
                        <li>
                            Express
                        </li>
                        <li>
                            Axios
                        </li>
                        <li>
                            Cheerio
                        </li>
                        <li>
                            CORS
                        </li>
                    </ul>
                </div>
            </div>

            <GitHubRepo
                link='https://github.com/shozuru/wiktionary-lookup'
            />
        </div>
    )
}

export default WiktionaryApp