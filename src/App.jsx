import { useState , useEffect} from "react"
import Header from "./components/Header"
import Taskform from "./components/Taskform"
import TaskItem from "./components/TaskItem"
import TaskList from "./components/TaskList"
import Footer from "./components/footer"
function App() {


  const [Tasks , setTasks] = useState([])
  const [Tasksfilter ,setTasksfilter ] = useState("all")
  const [search, setSearch] = useState("")
  let addtask = (newtask)=>{
    setTasks([...Tasks,
      {name : newtask,
      completed : false,
      id: Date.now()
    }
      
    ])
  }

 useEffect(()=>{
    let savedtasks = localStorage.getItem("tasks")
    if(savedtasks != null)
    {
    setTasks(JSON.parse(savedtasks))
    }
    else
    {
      return
    }
  },[])


  useEffect(()=>{
    localStorage.setItem("tasks" , JSON.stringify(Tasks))
  }, [Tasks])

 
  let deletetask = (deletedtask)=>{
    setTasks(Tasks.filter((task)=>{
      return task.id !== deletedtask
    }))
  }

  let isdone = (tasktocomplete)=>{
    setTasks(Tasks.map((task)=>
      {
        if(task === tasktocomplete)  
        {
          return {...task ,completed: !task.completed}
        }
       return task
      }))
  }

  let delete_completed_tasks = (Tasks)=>{
    setTasks(Tasks.filter((task)=>{
      return !task.completed
    }))
  }

let sort_tasks = (Tasks) => {
  return [...Tasks].sort((a, b) => {
    if (a.completed === false && b.completed === true) {
      return -1;
    }

    if (a.completed === true && b.completed === false) {
      return 1;
    }

    return 0;
  });
};

  let filteredtasks = (Tasksfilter)=>{
    if(Tasksfilter == "all")
    {
      return Tasks
    }
    else if (Tasksfilter == "active")
    {
      return Tasks.filter((tasks)=>(tasks.completed == false))
    }
    else if (Tasksfilter == "completed")
    {
      return Tasks.filter((tasks)=>(tasks.completed == true))
    }
  }


  let searchtasks = (Taskstosearch,search)=>{
     return Taskstosearch.filter((task)=>{
       return task.name.includes(search)
  })
  }

  let completed_tasks_count = ()=>{
    return Tasks.filter((task)=>{
      return task.completed
    }).length
  }
  
  let inprogres_tasks_count = ()=>{
    return Tasks.filter((task)=>{
      return !task.completed
    }).length
  }
 let all_tasks_count = ()=>{
    return Tasks.length
  }
  let saveEditTask = (newname,id)=>{
    setTasks(Tasks.map((task)=>{
      if(task.id == id)
      {
        return {...task , name : newname}
      }
      else
      {return task}
    }))
  }

  let task_done_percent=()=>{
    return (completed_tasks_count()/all_tasks_count()) * 100
  }


  return (
    <>
      <header>
        <Header completed_tasks_count={completed_tasks_count}
        inprogres_tasks_count ={inprogres_tasks_count}
        all_tasks_count={all_tasks_count} />
      </header>
      <Taskform addtask={addtask}  />
      <TaskList 
      setTasksfilter={setTasksfilter} 
      search={search} 
      setSearch={setSearch} 
      all_tasks = {Tasks}
      tasks = {sort_tasks(searchtasks(filteredtasks(Tasksfilter),search)) } 
      deletetask = {deletetask} 
      isdone = {isdone} 
      delete_completed_tasks={delete_completed_tasks}
      saveEditTask = {saveEditTask}
      />
      <footer>
        <Footer task_done_percent={task_done_percent}/>
      </footer>
    </>
  )
}

export default App
