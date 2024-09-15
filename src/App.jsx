import { useState } from 'react'


function App() {
  const [color, setColor] = useState("#000")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style = {{backgroundColor:color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Test</button>
            <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>Test</button>
            <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>Test</button>
            <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"yellow"}}>Test</button>
            <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"orange"}}>Test</button>
            <button onClick={() => setColor("violet")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"violet"}}>Test</button>
            <button onClick={() => setColor("indigo")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"indigo"}}>Test</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
