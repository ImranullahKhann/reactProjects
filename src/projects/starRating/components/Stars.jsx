import { FaStar } from "react-icons/fa"
import { useState } from "react"

export default function Stars ({number = 5}) {
    const [clicked, setClicked] = useState(-1)
    const [hover, setHover] = useState(-1)

    function handleMouseEnter (index) {
        setHover(index)
    }

    function handleMouseLeave () {
        setHover(-1)
    }

    function handleClick (index) {
        setClicked(index)
    }

    return <div className="stars">
        {
            Array.from({length: number + 1}, (_, index) => <FaStar key={index} size={30} className={"star"} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave() } onClick={() => handleClick(index)} style={{color: `${index <= hover || index <= clicked ? "orange": "black"}`}} />)
        }
    </div>
}