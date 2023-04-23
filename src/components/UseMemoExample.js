import React from 'react'
import { useState,useMemo } from 'react';

function UseMemoExample() {
 //JS functions and Objects / variables
  const[extra,setExtra] = useState('Some')
  const[count,setCount] = useState(0)
  const CalculatedData = useMemo(() => CalcData(count), [count]);
  //const CalculatedData = CalcData(count)

  const onePlus = () => {
    setCount(count+1);
  };
  const AddExtra = () => {
    setExtra(extra+ " - Some More");
  };

  function CalcData(_n)
  {
     console.log("Calculating - "+_n)
     let net = 0;
     for(let i=0;i<100000000;i++)
     {
        net+=i;
     }
     return (net+_n);
  }
 

  return (
    <>
    <div style={{marginLeft: "20px",cursor:"pointer"}}>
      <button onClick={() => AddExtra()}>Extra</button><br/>
      <button onClick={() => onePlus()}>Plus +</button><br/>
      <span>Count : {count}</span><br/>
      <span>Calculated Data : {CalculatedData}</span><br/>
      <span>Extras : {extra}</span>
    </div>
    </>
  )
}

export default UseMemoExample