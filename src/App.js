import { Flex } from '@chakra-ui/react';
import './App.css';
import CreditCard from './components/CreditCard';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Flex
            flexDirection='row'
            m='auto'
            mt='50px'
            w='180vh'
            justifyContent='space-around'>
        <CreditCard />
        <Form />
      </Flex>
      
    </div>
  );
}

export default App;
