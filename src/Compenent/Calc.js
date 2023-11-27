  import React, { useState } from 'react'

  export default function Calc() {
    const [result, setresult]=useState("")

    const handleClick = (e) => setresult(result.concat(e.target.name) );
    const Clear =()=>setresult('');
    const backspace =(e)=>setresult(result.slice(0,-1));
    const calculate =(e)=>{
      try{
          setresult(eval(result).toString());
      
      }catch(err){

        setresult("Error")

      }
    }

  return (
      <>
      <div className='containeree'>
            <form >
          <input type="text" value={result} className='input'/>
            </form>
            <div className="keypad">
              <button className='heigthligth' onClick={Clear} id='Clear'>Clear</button>
              <button className='heigthligth' onClick={backspace} id='backspace'>c</button>
              <button className='heigthligth'name='/' onClick={handleClick}>&divide;</button>
            <button onClick={handleClick} name='7'>7</button>
            <button onClick={handleClick} name='8'>8</button>
            <button onClick={handleClick} name='9'>9</button>
            <button className='heigthligth' name='*' onClick={handleClick}>&times;</button>
            <button onClick={handleClick} name='4'>4</button>
            <button onClick={handleClick} name='5'>5</button>
            <button onClick={handleClick} name='6'>6</button>
              <button className='heigthligth' name='-' onClick={handleClick}>&ndash;</button>
            <button onClick={handleClick} name='1'>1</button>
            <button onClick={handleClick} name='2'>2</button>
            <button onClick={handleClick} name='3'>3</button>
              <button className='heigthligth' name='+'  onClick={handleClick}>+</button>
            <button onClick={handleClick} name='0'>0</button>
            <button onClick={handleClick} name='.'>.</button>
            <button className='heigthligth' onClick={calculate} id='result'>=</button>
            </div>
          
      </div>
      </>
    )
  }
  