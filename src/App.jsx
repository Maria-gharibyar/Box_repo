import { useState } from 'react'
import Box from './components/Box'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box>
        <div className="size-box"></div>
      </Box>
    </>
  )
}

export default App
