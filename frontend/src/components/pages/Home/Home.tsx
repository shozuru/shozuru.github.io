import "./Home.css"

const Home: React.FC = () => {

    return (

        <div
            className="home-page-container"
        >
            <header
                className='home-page-header'
            >
                <h1>
                    Welcome to my personal website!
                </h1>

                <h3>
                    I'm Andrew Amadeo, an aspiring software engineer interested
                    in language technology!
                </h3>

            </header>

            <main
                className='main-home-page-container'
            >

                <p>
                    If you want to learn more about me, click the About tab!
                </p>

                <p>
                    Feel free to look at some of my featured Projects in the
                    projects tab!
                </p>

                <p>
                    You can find ways to contact me by clicking on the Contact
                    tab!
                </p>
            </main>
        </div>
    )
}

export default Home