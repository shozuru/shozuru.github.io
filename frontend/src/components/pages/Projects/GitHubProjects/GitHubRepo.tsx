interface GitHubLink {
    link: string
}
const GitHubRepo: React.FC<GitHubLink> = ({ link }) => {

    return (
        <div
            className='github-repo'
        >
            <a
                href={link}
            >
                GitHub Repo
            </a>
        </div >
    )
}

export default GitHubRepo