export default function MultipleSelec ({ data, multiple, setMultiple }) {
  function handleClick (id) {
    const found = multiple.findIndex((elem) => id === elem);

    if (found === -1)
        setMultiple(multiple.push(id))
    else    
        setMultiple(multiple.splice(found, 1))
  }

  function checkToggle (id) {
    const found = multiple.findIndex((elem) => id === elem);

    if (found === -1)
        return false;
    else 
        return true;
  }
  
  return (
    <div onClick={() => handleClick(data.id)} className="singleSelec">
      <div className="question">{data.question}</div><span className="toggle">{ checkToggle(data.id) ? "-" : "+"}</span>
      { checkToggle(data.id) ? <div className="answer">{ data.answer }</div> : <div></div> }
      <hr />
    </div>
  )
};
