import React from 'react';
import { Box, Button, Flex, Center, Heading, Input, Spacer, Stack, Text, Tag, SimpleGrid, GridItem, Image, Spinner } from "@chakra-ui/react";
import "./Home.css";

function Home() {
    return (
        <Box>
            <Image src="https://i.imgur.com/JryktG0.jpg"/>
            <div class="hero-image">
            <div class="hero-text">
                <h1>Hola Soy Carlos Farias</h1>
                <p>Y me dedico a intentar pasar los semestres</p>
                <Button color={'black'}><a href="/images" className="Text">Vamos a 5 Semestre</a></Button>
            </div>
            </div>
            <Image src="https://i.imgur.com/ZdH66xh.jpg"/>
        </Box>
    );
}

export default Home;