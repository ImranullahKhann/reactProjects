export default function SingleSelec ({ data, state, setState }) {
  function handleClick (id) {
    if (id !== state)
      setState(data.id)
    else
      setState(-1)
  }
  
  return (
    <div onClick={() => handleClick(data.id)} className="singleSelec">
      <div className="question">{data.question}</div><span className="toggle">{state == data.id ? "-" : "+"}</span>
      { state == data.id ? <div className="answer">{ data.answer }</div> : <div></div> }
      <hr />
    </div>
  )
};
