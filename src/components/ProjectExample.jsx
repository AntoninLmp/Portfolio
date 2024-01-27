import '../index.css';

// eslint-disable-next-line react/prop-types
const ProjectExample = ({ projectName, imageSrc, pContent, githubLink}) => (
    <section>
        <h1 className={'m-6 font-semibold italic'}>{projectName}</h1>
        <div className={'ml-8 flex items-center'}>
            <img src={imageSrc} className={'w-17em'} alt={'project Image example'}/>
            {pContent}
        </div>
        <div className={'py-3'}>
            <a href={githubLink}
               className={'my-1'}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    className={'w-14 h-14 ml-90'}
                    alt={'github Logo'}/>
            </a>
        </div>
    </section>

);

export default ProjectExample;