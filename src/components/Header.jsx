import React from 'react'
import './headerstyle.css'
import ToDoListphoto from '../assets/todolist-backgroud-remove.png'
export default function ({completed_tasks_count , inprogres_tasks_count , all_tasks_count}) {
  return (
    <>
    <header>
        <nav>
            <div className="logo">
                    <img src={ToDoListphoto} alt="logo"/>
            </div>

            <div className="task-stats">
  <div className="stat">
    <span>Total Tasks</span>
    <p>{all_tasks_count()}</p>
  </div>

  <div className="stat">
    <span>Completed</span>
    <p>{completed_tasks_count()}</p>
  </div>

  <div className="stat">
    <span>Active</span>
    <p>{inprogres_tasks_count()}</p>
  </div>
</div>
        </nav>
    </header>
    </>
  )
}
