import '../../index.css';
import Typewriter from 'typewriter-effect';
import imageDesktop from '../../assets/bg_desk2.jpg';
import {Link} from "react-router-dom";

function HeaderHomePage() {
    return (
        <div className={"w-full text-center flex flex-col justify-evenly"}>
            <img
                src={imageDesktop}
                alt={"GIF"} className={"w-1/2 lg:w-1/4 mx-auto"}/>
            <section className={'mt-4 font-poppins'}>
                <p className={' text-3xl md:text-4xl lg:text-5xl text-neutral-dark mb-8 font-bold'}>
                    Bienvenue sur mon portfolio
                </p>
                <div className={'flex justify-center mt-4 text-lg'}>
                    <p className={' mr-1'}>Vous découvrirez que je suis</p>
                    <div className={'flex text-primary-green font-bold'}>
                        <Typewriter options={{
                            strings: ['Développeur web.', 'j\'adore travailler en équipe.', 'chef Scouts.', 'un voyageur.', 'passionné de nature.'],
                            autoStart: true,
                            loop: true,
                        }}/>
                    </div>
                </div>
            </section>
            <Link to={"/AntoninLampin"} className={"mt-5 text-xl"}>
                <button className={"bg-primary-green text-white px-8 py-3 rounded-lg font-body font-semibold hover:bg-primary-green-dark transition-smooth shadow-md hover:shadow-lg"}>
                    Découvrir mon parcours
                </button>
            </Link>
        </div>

    );
}

export default HeaderHomePage;