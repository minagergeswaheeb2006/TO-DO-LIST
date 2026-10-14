import React, { useState } from 'react'
import './taskitem.css'
export default function TaskItem({ task, taskname, taskid, completed, deletetask, isdone, saveEditTask }) {
    const [edittask, setedittask] = useState(taskname)
    const [editmood, seteditmood] = useState(false)

    return (
        <>
            <div className="tasktodo">
                <div className="taskcheck">
                    <input type="checkbox" name="isdone" id="isdone-checkbox" onClick={() => { isdone(task) }} checked={completed} />
                </div>
                <div className={completed ? "taskdone" : "task"}  >
                    {editmood ? <input
                        type="text"
                        value={edittask}
                        onChange={(e) => setedittask(e.target.value)}
                    /> : <p>{taskname}</p>}

                </div>
                {editmood ?
                    <button
                        type="button"
                        onClick={() => { saveEditTask(edittask, taskid), seteditmood(!editmood) }}
                    >Save</button> : <button
                        type="button"
                        onClick={() => { seteditmood(!editmood) }}>
                        Edit
                    </button>}

                <button type="button" onClick={() => { deletetask(taskid) }}>
                    Delete
                </button>

            </div>
        </>
    )
}
