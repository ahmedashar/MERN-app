import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const [data, setData] = useState("");
  useEffect( ()=>{
   getData()
  },[])

  const getData = async ()=>{
    try {
      const response = await axios.get("/api/demo"); // we use proxy in vite.config.js file to overcome on the cors issues
      setData(response.data)
    } catch (error) {
      
    }
  }
  return (
    <>
      <h1>{data} Todo App</h1>
    </>
  )
}

export default App
