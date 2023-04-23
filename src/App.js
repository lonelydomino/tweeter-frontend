import { ChakraProvider } from '@chakra-ui/react'
import './styles/app.css'
import MainContainer from "./components/containers/MainContainer"

function App() {

  return (
    <ChakraProvider>
      <div className="App">           
          <MainContainer />
      </div>
    </ChakraProvider>
  )
}

export default App
