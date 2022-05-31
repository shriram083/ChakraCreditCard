import React from 'react'
import { Grid, Input, GridItem, Heading, Flex, Button, Text } from '@chakra-ui/react'
import { FiUserCheck, FiCreditCard, FiCalendar, FiLock } from "react-icons/fi";
const Form = () => {
  return (
    <Grid 
        templateColumns='repeat(3, 1fr)'
        gap={1}
        w='500px'
        >
        <GridItem  h={50} colSpan={3} m='0px 20px'>
            <Heading textAlign='left' fontSize='30px' color='gray'>Payment Details</Heading>
        </GridItem>
        <GridItem borderBottom='2px solid red' h='70px' colSpan={3} textAlign='left' pd='10px' m='0px 20px'>
            <Text>CARDHOLDER NAME</Text>
            <Flex alignItems='center'>
                <FiUserCheck fontSize={30} color='red'/>
                <Input border='none'/>
            </Flex>
        </GridItem>
        <GridItem borderBottom='2px solid red' h='70px' colSpan={3} textAlign='left' pd='10px' m='0px 20px'>
            <Text>CARD NUMBER</Text>
            <Flex alignItems='center'>
                <FiCreditCard fontSize={30} color='red'/>
                <Input border='none'/>
            </Flex>
        </GridItem>
        <GridItem borderBottom='2px solid red' h='70px' colSpan={1} textAlign='left' pd='10px' m='0px 20px'>
            <Text>EXPIRY MONTH</Text>
            <Flex alignItems='center'>
                <FiCalendar fontSize={30} color='red'/>
                <Input border='none'/>
            </Flex>
        </GridItem>
        <GridItem borderBottom='2px solid red' h='70px' colSpan={1} textAlign='left' pd='10px' m='0px 20px'>
            <Text>EXPIRY YEAR</Text>
            <Flex alignItems='center'>
                <FiCalendar fontSize={30} color='red'/>
                <Input border='none'/>
            </Flex>
        </GridItem>
        <GridItem borderBottom='2px solid red' h='70px' colSpan={1} textAlign='left' pd='10px' m='0px 20px'>
            <Text>CVV</Text>
        
            <Flex alignItems='center'>
                <FiLock fontSize={30} color='red'/>
                <Input border='none'/>
            </Flex>
        </GridItem>
        <GridItem h={50} colSpan={3} m='0px 20px'>
            <Flex justifyContent='space-around' alignItems='center'>
                <Heading textAlign='left' fontSize='30px' >Payment Amount : </Heading>
                <Heading color='red'> 12 300 P</Heading>
            </Flex>
        </GridItem>
        <GridItem h={50} colSpan={3}>
        <Button colorScheme='red' size='lg' width={200} h={50} fontSize='20px'>
            PAY
        </Button>
        </GridItem>
    </ Grid>
  )
}

export default Form