import '../index.css';
import Typewriter from 'typewriter-effect';
import imageDesktop from '../assets/bg_desk2.jpg';
import imgWave from '../assets/waveHome.svg';

function HeaderHomePage() {
    return (
        <div className={"w-full text-center font-roboto flex flex-col h-screen"}>
            <img
                src={imageDesktop}
                alt={"GIF"} className={"w-1/4 m-auto"}/>
            <section className={'mt-4'}>
                <p className={'text-5xl text_shadow'}>Bienvenue sur mon portfolio</p>
                <div className={'flex justify-center mt-4 italic font-light text-xl'}>
                    <p className={' mr-1'}>A travers ce site, vous découvrirez que je suis</p>
                    <p className={'flex'}>
                        <Typewriter options={{
                            strings: ['étudiant en alternance.', 'développeur logiciel junior.', 'chef scouts et guides de France.', 'un voyageur.', 'passionné de nature.'],
                            autoStart: true,
                            loop: true,
                        }}/>
                    </p>
                </div>
            </section>
            <a href={"/AntoninLampin"} className={"mt-5 italic text-2xl"}>
                <button className={"bg_green text-xl mt-5 italic p-4 rounded-xl m-auto"}> Let's go </button>
            </a>

            <div className="svg-container">
                <img src={imgWave} alt={"Waves background"} className={"relative bottom-10"}/>
            </div>
        </div>

    );
}

export default HeaderHomePage;