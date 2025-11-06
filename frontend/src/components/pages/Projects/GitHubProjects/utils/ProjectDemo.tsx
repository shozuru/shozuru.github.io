interface DemoLink {
    link: string
}
const ProjectDemo: React.FC<DemoLink> = ({ link }) => {

    return (
        <div
            className='demo-link'
        >
            <a
                href={link}
            >
                Project Demo
            </a>
        </div>
    )
}

export default ProjectDemo