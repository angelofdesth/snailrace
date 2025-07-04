import "../SnailRace.css"

interface StartScreenProps {
    setStarted: (value: boolean) => void;
}

function StartScreen(props: StartScreenProps) {
    const handleStart = () => {
        props.setStarted(true);
    }


    return <div className="sign">
        <h1>Snail Race!</h1>
        <button 
                onClick={handleStart}>Start</button>
    </div>
}

export default StartScreen; 