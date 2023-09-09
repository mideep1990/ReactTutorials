import { React,useState,useRef, useId }  from 'react'

function Testcomp() {

  const [arr,SetArr] = useState([])
  const inputElement = useRef();
  const id = useId()
  const id1 = useId()

  function addValue()
  {
    console.log("id : ",id)
    console.log("id1 : ",id1)
    SetArr([...arr,inputElement.current.value])
    //console.log(arr)
  }

  return (
    <div>
        <input type={'text'} ref={inputElement}/>
        <button onClick={addValue} id={id}>Add</button>
        {arr.length>0 && <span>Data : {arr.join(',')}</span>}
    </div>
  )
}


export default Testcomp;