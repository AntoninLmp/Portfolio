import { useEffect, useState } from 'react';
import '../../index.css';

function StartName() {
    const [classNameDiv, setclassNameDiv] = useState('start-div');
    let Timer1, setTimer1;
    [Timer1, setTimer1] = useState(null);
    let Timer2, setTimer2;
    [Timer2, setTimer2] = useState(null);

    useEffect(() => {
        setTimer1(setTimeout(() => {
            setclassNameDiv('start-div black-window');
        }, 5000));
        setTimer2(setTimeout(() => {
            setclassNameDiv('hidden');
        }, 5900));
        return () => {
            clearTimeout(Timer1);
            clearTimeout(Timer2);
        }
    }, [Timer1, Timer2]);

    return (
        <div className={classNameDiv}>
            <h1 className='tracking-[0.5em] uppercase font-bold sm:text-2xl md:text-5xl mb-10 animation_text'>Antonin Lampin</h1>
            <h2 className='tracking-[0.2em] italic font-extralight sm:text-xl md:text-2xl animation_text'>Software Engineer</h2>
        </div >
    );
}

export default StartName