import '../index.css';
import Typewriter from 'typewriter-effect';

function HeaderHomePage() {
    return (
        <div className={"w-full text-center font-roboto"}>
            <img src={"https://user-images.githubusercontent.com/19783675/259906130-5d3c8800-fb00-45d0-b9dd-7eb82f057baf.gif"} alt={"GIF"} className={"w-2/5 m-auto"}/>
            <section className='font_raleway'>
                <p className={'text-5xl text_shadow'}>Bienvenue sur mon portfolio</p>
                <div className={'flex justify-center mt-2'}>
                    {/*<img src="https://gifdb.com/images/high/animated-man-computer-coding-nae6mec378lsg1i3.gif"/>*/}
                    <p className={'flex'}>A travers ce site, vous découvrirez que je suis</p>
                    <p className={'flex'}>
                        <Typewriter options={{
                                strings: ['étudiant en alternance.', 'développeur logiciel junior.', 'chef scouts et guides de France.', 'un voyageur.', 'passionné de nature.'],
                                autoStart: true,
                                loop: true,
                            }} /> 
                    </p>
                </div>
                {/* <p className='Header_desc'>Vous pourrez en apprendre plus sur mes projets, mes études où encore sur moi même !</p> */}
            </section>
        </div>
    );
}
export default HeaderHomePage;