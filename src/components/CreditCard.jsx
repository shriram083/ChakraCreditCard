import React, {useState} from 'react'
import { Image, Text } from '@chakra-ui/react'
import credit from '../creditcard.png'

const CreditCard = () => {
  const [abc,setAbc] = useState(10);
  return (
    <div >
        <Image src={credit} alt='img' />
    </div>
  )
}

export default CreditCard