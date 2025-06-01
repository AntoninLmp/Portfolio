import { useEffect, useState } from 'react';
import '../../index.css';

function StartName() {
    const [classNameDiv, setclassNameDiv] = useState('start-div');
    const [timer1, setTimer1] = useState(null);
    const [timer2, setTimer2] = useState(null);

    useEffect(() => {
        const t1 = setTimeout(() => {
            setclassNameDiv('start-div black-window');
        }, 5000);
        const t2 = setTimeout(() => {
            setclassNameDiv('hidden');
        }, 5900);

        setTimer1(t1);
        setTimer2(t2);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, []); // Exécuter une seule fois au montage

    return (
        <div className={classNameDiv}>
            <h1 className='tracking-[0.5em] uppercase font-bold sm:text-2xl md:text-5xl mb-10 animation_text'>Antonin Lampin</h1>
            <h2 className='tracking-[0.2em] italic font-extralight sm:text-xl md:text-2xl animation_text'>Software Engineer</h2>
        </div >
    );
}

export default StartName