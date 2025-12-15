import menus from "./data.js"
import MenuItem from "./components/MenuItem.jsx"
import "./styles.css"

export default function RecursiveMenu ({ menu = menus}) {
    return <div className="recursive-menu">
        {
            menu === menus ? 
            <h2>Recursive Menu</h2>
            :
            null
        }
        <ul>
            { 
            menu.map((item, index) => <MenuItem item={item} key={index} />)
            }
        </ul>
    </div>
}