import PropTypes from "prop-types";

const ProjectExample = ({projectName, imageSource, content, githubLink}) => (
    <section>
        <h1 className={'m-6 font-semibold italic'}>{projectName}</h1>
        <div className={'ml-8 flex items-center'}>
            <img src={imageSource} className={'w-17em'} alt={'project Image example'}/>
            {content}
        </div>
        <div className={'py-5 flex justify-end items-center mx-10 gap-10'}>
            <p className={'text-center'}>{githubLink}</p>
            <a href={githubLink}
               className={'my-1'}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    className={'w-14 h-14'}
                    alt={'github Logo'}/>
            </a>
        </div>
    </section>

);

ProjectExample.propTypes = {
    projectName: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired
};
export default ProjectExample;