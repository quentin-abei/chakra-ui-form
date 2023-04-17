import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import LoginForm from './components/Login/LoginForm';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
    <LoginForm />
    </div>
    
    </ChakraProvider>
  );
}

export default App;
