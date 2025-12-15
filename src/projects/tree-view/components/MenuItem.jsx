import RecursiveMenu from "../RecursiveMenu"
import { useEffect, useState } from "react"

export default function MenuItem({ item }) {

    const [itemStatus, setItemStatus] = useState({})

    function changeStatus(label) {
        setItemStatus(prev => {
            return {
                ...prev,
                [label]: !itemStatus[label]
            }
        })
    }

    return <li>
        <div className="menu-item">
            <span>{ item.label }</span>
            {
            item.children && item.children.length > 0 ?
            <span onClick={() => changeStatus(item.label)} className="toggle-expand">+</span>
            :
            null
            }
        </div>
        {
            item.children && item.children.length > 0 && itemStatus[item.label] ?
            <RecursiveMenu menu={item.children} />
            :
            null
        }
    </li>
}