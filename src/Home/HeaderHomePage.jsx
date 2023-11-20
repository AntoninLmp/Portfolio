import '../index.css';
import Typewriter from 'typewriter-effect';

function HeaderHomePage() {
    return (
        <div className='d_flex align_center w_100'>
            <section className='font_raleway'>
                <p className='Header_desc'>Bienvenue sur mon <span className='c_green bold oblique'>portfolio</span> !</p>
                <div className='d_flex'>
                    {/*<img src="https://gifdb.com/images/high/animated-man-computer-coding-nae6mec378lsg1i3.gif"/>*/}
                    <p className='Header_desc d_flex'>A travers ce site, vous découvrirez que je suis</p>
                    <p className='Header_desc d_flex'>
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