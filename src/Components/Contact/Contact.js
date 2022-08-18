import React from 'react';
import { Box, Button, Flex, Center, Heading, Input, Spacer, Stack, Text, Tag, SimpleGrid, GridItem, Image, Spinner } from "@chakra-ui/react";

function Contact(props) {

    var asuntoInput;
    var correoInput;
    var textInput;

    return (
        <Box>
            <Heading>Contacto</Heading>
            <Box>
            <Center>
            <Image src="https://i.imgur.com/SzS2bWC.png" h='sm'/>
            <div className="App">
                <Input
                    className='input-asunto'
                    placeholder='Cual es tu Asunto?'
                    type={'text'}
                    onChange={(e) => {
                    console.log(e.target.value);
                    asuntoInput = e.target.value;
                }}/>
                <Input
                    className='input-correo'
                    placeholder='Ingresa Tu Correo'
                    type={'text'}
                    onChange={(e) => {
                    console.log(e.target.value);
                    correoInput = e.target.value;
                    }}/>
                <Input
                    className='input-text'
                    placeholder='Escribe Algo'
                    type={'text'}
                    onChange={(e) => {
                    console.log(e.target.value);
                    textInput = e.target.value;
                    
                }}/>
      <Button onClick={() => {
        console.log(asuntoInput);
        console.log(correoInput);
        console.log(textInput);
        alert(`Asunto: ${asuntoInput}\nAtte: ${correoInput}\n${textInput}`);
      }}>
        Submit
      </Button>
      </div>
      </Center>
      </Box>
        </Box>
    );
}

export default Contact;