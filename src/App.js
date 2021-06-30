import Home from "./containers/Home";
import './styles/style.css'
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider className="App">
      <Home/> 
    </ChakraProvider>
  );
}

export default App;
