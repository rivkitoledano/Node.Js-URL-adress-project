import { useState } from 'react'
import './App.css'
import ClicksBySourceChart from '../components/ClicksBySourceChart.jsx';
import ClicksByUserChart from '../components/ClicksByUserChart.jsx';
import ClicksByDayChart from '../components/ClicksByDayChart.jsx';
function App() {
 

  return (
    <>
      <div className="App">
        <h1>TinyUrl Dashboard</h1>
        <ClicksBySourceChart linkId="664b84923a636ed7466d9135" />
        <ClicksByUserChart userId="your-user-id" />
        <ClicksByDayChart userId="your-user-id" />
      </div>
    </>

  )
}

export default App
