import Snail from "./Snail"
import RaceEnd from "./RaceEnd"
import "../SnailRace.css"
import { useEffect, useState } from "react";

function getRandomNum(max: number) {
  return Math.floor(Math.random() * max);
}
function zip(a:number[], b:number[]) {
    return a.map((k, i) => [k, b[i]]);
}


const idToName = ["Bartholomew", "Bob", "Hubert", "Leaf"]
const finishLine = 840

interface RaceTrackProps {
    setStarted: (value: boolean) => void;
}

function RaceTrack (props: RaceTrackProps) {
    const ids = [0, 1, 2, 3]
    const [positions, setPositions] = useState([0, 0, 0, 0])
    const [placements, setPlacements] = useState<number[]>([])
    const [over, setOver] = useState(false)

    // race logic
    useEffect(() => {
        const interval = setInterval(() => {
        setPositions(prev => {
            const i = getRandomNum(4)
            const newPositions = [...prev]
            // if the snail is far from the first, then we give it a little boost
            if (newPositions[i] < finishLine) {
                console.log(newPositions[i])
                const first = Math.max(...newPositions)
                newPositions[i] += getRandomNum(15) * (1 + (first - newPositions[i])/500)
                console.log(newPositions)
                if (newPositions[i] >= finishLine) {
                    console.log(i)
                    setPlacements(prev => {
                        if (!(prev.includes(i))) {
                            return [...prev, i]
                        }
                        return prev 
                    })
                }
            }
            
            if (newPositions.every(pos => pos >= finishLine)) {
                setOver(true)
                clearInterval(interval)
            }
            return newPositions
        })
    }, 1000/20)
    return () => clearInterval(interval)
    }, [])
    

    return <div>
        {zip(ids, positions).map(([id, pos]) => 
        <Snail key ={id} id={id} name = {idToName[id]} position = {pos} />)}
        
        {over &&
            <RaceEnd setStarted = {props.setStarted} placements = {placements.map(id => idToName[id])}/>
            }
    </div>
}

export default RaceTrack