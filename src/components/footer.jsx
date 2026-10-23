import React from 'react'
import './footer.css'
export default function footer({task_done_percent}) {
  return (
<footer className="progress-footer">
      <div className="progress-header">
        <span>Task Progress</span>
        <span className="progress-percentage">{task_done_percent().toFixed(2)}%</span>
      </div>

      <div className="progress-track">
        <div className="progress-fill" 
         style={{ width: `${task_done_percent()}%` }}
        ></div>
      </div>

      <p className="progress-caption">Keep going! You're doing great.</p>
    </footer>  )
}
