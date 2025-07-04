import "../SnailRace.css"
import bartholomew from '../../../assets/bartholomew.png';
import bob from "../../../assets/bob.png"
import hubert from "../../../assets/hubert.png"
import leaf from "../../../assets/leaf.png"

interface SnailProps {
    id: number;
    position: number;
    name: string;
}

function Snail (props: SnailProps) {
    const idToFile = [
        bartholomew,
        bob,
        hubert,
        leaf
    ]

    return <div className="snail" style = {{top: `${props.id*9.3+8}vw`,
                left: `${props.position/11.5+8}%`}}>
        <p className = "nametag">
            {props.name}
        </p>
        <img
        src = {idToFile[props.id]}
        alt = {props.name}
        style = {{width:`90%`}}
    />
    </div>
    
}

export default Snail;