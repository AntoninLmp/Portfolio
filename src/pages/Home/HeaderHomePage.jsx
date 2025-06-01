import '../../index.css';
import Typewriter from 'typewriter-effect';
import imageDesktop from '../../assets/bg_desk2.jpg';
import imgWave from '../../assets/waveHome.svg';
import {Link} from "react-router-dom";

function HeaderHomePage() {
    return (
        <div className={"w-full text-center font-roboto flex flex-col justify-evenly"}>
            <img
                src={imageDesktop}
                alt={"GIF"} className={"w-1/2 lg:w-1/3 mx-auto"}/>
            <section className={'mt-4'}>
                <p className={'text-2xl md:text-3xl lg:text-5xl text_shadow'}>Bienvenue sur mon portfolio</p>
                <div className={'flex justify-center mt-4 italic font-light text-base'}>
                    <p className={' mr-1'}>Vous découvrirez que je suis</p>
                    <div className={'flex'}>
                        <Typewriter options={{
                            strings: ['étudiant en alternance.', 'développeur logiciel junior.', 'chef Scouts.', 'un voyageur.', 'passionné de nature.'],
                            autoStart: true,
                            loop: true,
                        }}/>
                    </div>
                </div>
            </section>
            <Link to={"/AntoninLampin"} className={"mt-5 italic text-2xl"}>
                <button className={"bg_green text-xl mt-5 italic p-4 rounded-xl m-auto"}>Let&apos;s go </button>
            </Link>

            <div className="svg-container">
                <img src={imgWave} alt={"Waves background"} className={"relative bottom-10"}/>
            </div>
        </div>

    );
}

export default HeaderHomePage;