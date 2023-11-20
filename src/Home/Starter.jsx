import { useEffect, useState } from 'react';
import './css/Starter.css';
import '../index.css';

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
            <h1 className='nameStart animation_text'>Antonin Lampin</h1>
            <h2 className='descriptionStart animation_text'>Software Engineer</h2>
        </div >
    );
}

export default StartName