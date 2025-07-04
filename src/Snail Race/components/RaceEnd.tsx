import "../SnailRace.css"

interface RaceEndProps {
    setStarted: (value: boolean) => void;
    placements: string[]
}

function RaceEnd(props: RaceEndProps) {
    const handleRestart = () => {
        props.setStarted(false);
    }

    return <div className = "sign">
        <p>First place: {props.placements[0]} <br />
            Second place: {props.placements[1]}<br />
            Third place: {props.placements[2]}<br />
            Last place: {props.placements[3]}</p>
          <button onClick={handleRestart}>Back to Home</button> 
    </div>
      
}

export default RaceEnd;