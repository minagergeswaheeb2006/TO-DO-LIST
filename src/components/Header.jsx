import React from 'react'
import './headerstyle.css'
import ToDoListphoto from '../assets/todolist-backgroud-remove.png'
export default function () {
  return (
    <>
    <header>
        <nav>
            <div className="logo">
                    <img src={ToDoListphoto} alt="logo"/>
            </div>


        </nav>
    </header>
    </>
  )
}
