import Stars from "./components/Stars.jsx"
import "./styles.css"

export default function StarRating () {
    return <div className="star-rating">
        <h2>Star Rating</h2>
        <Stars number={10} />
    </div> 
}