import TweetForm from "./components/TweetForm"
import TweetsContainer from "./components/TweetsContainer"
import { ChakraProvider } from '@chakra-ui/react'
import './styles/app.css'

function App() {
  return (
    <ChakraProvider>
      <div className="App">   
            <TweetForm />
            <TweetsContainer />
      </div>
    </ChakraProvider>
  )
}

export default App
