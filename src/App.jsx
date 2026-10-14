import { useState , useEffect} from "react"
import Header from "./components/Header"
import Taskform from "./components/Taskform"
import TaskItem from "./components/TaskItem"
import TaskList from "./components/TaskList"
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
  return (
    <>
      <header>
        <Header />
      </header>
      <Taskform addtask={addtask}  />
      <TaskList 
      setTasksfilter={setTasksfilter} 
      search={search} 
      setSearch={setSearch} 
      tasks = {searchtasks(filteredtasks(Tasksfilter),search) } 
      deletetask = {deletetask} 
      isdone = {isdone} 

      saveEditTask = {saveEditTask}
      />
      
    </>
  )
}

export default App
