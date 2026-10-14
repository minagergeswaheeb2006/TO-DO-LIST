import React, { useState } from 'react'
import './taskform.css'
export default function ({addtask}) {

  const [input , setinput] = useState("")
  return (
    <>
    <div className="formcomponent">
  
        <div className="maininput">
            <input type="text" placeholder='Add your new task ...' value={input} onChange={(e)=>setinput(e.target.value)} />
        </div>
        <div className="addtolist">
            <input type="button" value="Add task" onClick={()=>{addtask(input)
              setinput("")
            }}   />
        </div>
    </div>
    </>
  )
}
