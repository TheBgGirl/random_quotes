import { useState, useEffect } from 'react'
import reactLogo from './assets/quotes.webp'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const [count, setCount] = useState(0)
  const [quote, setQuote] = useState([]);

  const fetchQuote = async () => {
    const response = await axios.get("http://localhost:8080/random");
    setQuote(response.data);
    console.log(response.data.quote);
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1><span>Quote</span> of The Day</h1>
      <div className="card">
          <h1>{quote.quote}</h1>
      </div>
      <h2 className="read-the-docs">
        {quote.author}
      </h2>
    </>
  )
}

export default App
