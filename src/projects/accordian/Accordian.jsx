import "./styles.css";
import data from "./data.js";
import SingleSelec from "./components/SingleSelec.jsx";
import MultipleSelec from "./components/MultipleSelec.jsx";
import { useState } from "react";

export default function Accordian() {
  const [active, setActive] = useState(-1);
  const [multipleSelec,setMultipleSelec] = useState(true);
  const [multiple, setMultiple] = useState([]);

  return (
    <div className="accordian">
      <h2>Accordian</h2>
      <div>
        { !multipleSelec ? 
        data.map(item => <SingleSelec data={item} state={active} key={item.id} setState={setActive} />) 
        :
        data.map(item => <MultipleSelec data={item} multiple={multiple} key={item.id} setMultiple={setMultiple} />) }
      </div>
    </div>
  )
}
