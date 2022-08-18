import React from 'react';
import { Box, Button, Flex, Center, Heading, Input, Spacer, Stack, Text, Tag, SimpleGrid, GridItem, Image, Spinner } from "@chakra-ui/react";
import { RViewerTrigger, RViewer } from 'react-viewerjs';

function Images(props) {

    let imagenes = [
        require("./Imagenes/Dublinia.jpg"),
        require("./Imagenes/Phoenix-Park.jpg"),
        require("./Imagenes/River-liffey.jpg"),
        require("./Imagenes/cliffs-of-moher.jpg"),
    ];

    return (
        <div>
            <Heading>Imagenes</Heading>
            <RViewer imageUrls={imagenes}>
                <div style={{display: 'flex', marginTop: '40px'}}>
                    {imagenes.map((imagen, index)=>{
                        return(
                            <RViewerTrigger index={index}>
                                <img src={imagen} style={{width: '350px', height: '350px', marginLeft: '20px', border: '2px solid black'}} />
                            </RViewerTrigger>
                        )
                    })}
                </div>

            </RViewer>
            
            
        </div>
    );
}

export default Images;