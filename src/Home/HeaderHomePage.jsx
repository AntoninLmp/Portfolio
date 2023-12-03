import '../index.css';
import Typewriter from 'typewriter-effect';

import imgWave from '../assets/waveHome.svg';

function HeaderHomePage() {
    return (
        <div className={"w-full text-center font-roboto flex flex-col h-screen"}>
            <img
                src={"https://user-images.githubusercontent.com/19783675/259906130-5d3c8800-fb00-45d0-b9dd-7eb82f057baf.gif"}
                alt={"GIF"} className={"w-1/3 m-auto"}/>
            <section className={'mt-4'}>
                <p className={'text-5xl text_shadow'}>Bienvenue sur mon portfolio</p>
                <div className={'flex justify-center mt-4 italic font-light text-xl'}>
                    {/*<img src="https://gifdb.com/images/high/animated-man-computer-coding-nae6mec378lsg1i3.gif"/>*/}
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
            <button className={"bg_green mt-5 italic p-4 rounded-xl m-auto"}>Let's go</button>
            <div className="svg-container">
                <img src={imgWave} alt={"Waves background"} className={"relative bottom-10"}/>
            </div>
        </div>

    );
}

export default HeaderHomePage;