import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.png';
import { Box, Button, Flex, Center, Heading, Input, Spacer, Stack, Text, Tag, SimpleGrid, GridItem, Image, Spinner, HStack  } from "@chakra-ui/react";

const Header = (props) => {

    const {title, url} = props;

    return ( 
        <header className="App-header">
            <a href={url} className="App-cola  ">
                <Center>
                <img src={logo} className="App-logo" alt="logo" style={{marginLeft: '20px'}}/>
                    <Button><a href="/" className="Text">Home</a></Button>
                    <Button><a href="/images" className="Text">Imagenes</a></Button>
                    <Button><a href="/contact" className="Text">Contacto</a></Button>
                </Center>
            </a>
        </header>
    );
    
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
}

export default Header;