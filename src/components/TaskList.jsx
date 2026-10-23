import React from 'react'
import './tasklist.css'
import TaskItem from './TaskItem'
export default function TaskList({ search, setSearch, setTasksfilter, tasks, deletetask, isdone, all_tasks, saveEditTask, delete_completed_tasks }) {

  return (
    <>
      <div className="searchbox">
        <input
          type="text"
          value={search}
          placeholder='search for task ...'
          onChange={(e) => (setSearch(e.target.value))
          }
        />
        <button type="button">search</button>
      </div>
      <div className='contbuttons'>
        <button type="button"
          onClick={() => (setTasksfilter("all"))}>all</button>
        <button type="button"
          onClick={() => (setTasksfilter("completed"))}>completed</button>
        <button type="button"
          onClick={() => (setTasksfilter("active"))}>active</button>
      </div>
      {tasks.length === 0 ? <p>Task not found</p> :
        tasks.map((task) => (
          <TaskItem
            taskname={task.name}
            taskid={task.id}
            completed={task.completed}
            task={task}
            deletetask={deletetask}
            isdone={isdone}
            saveEditTask={saveEditTask} />
        ))}
      <div className="completed_task">
        <button type="button"
          onClick={() => (delete_completed_tasks(all))}>Delete Completed Tasks</button>
      </div>


    </>
  )
}
