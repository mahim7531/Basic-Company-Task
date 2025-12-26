import React from 'react'
import TaskList from './TasklList'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-100 p-6'>
    <h1 className='text-2xl font-bold text-center mb-6'>Task List Section</h1>
    <TaskList/>
    </div>
  )
}

export default App
