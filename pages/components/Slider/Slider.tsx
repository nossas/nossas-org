import React from 'react';
import Image from 'next/image'
import { Flex, Text, Heading, Link, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Content = () => (
  <Stack paddingX='98px' spacing='12' direction='row'>
    <Flex flex='1'>
      <Image src='/static/media/leftcontent.png' alt="Mobilizadores Região Amazônica" width={615} height={357} />
    </Flex>
    <Stack flex='1' direction='column' spacing='8'>
      <Heading as="h3" size="lg" color='nossas.blue'>| TREINAMENTOS REALIZADOS</Heading>
      <Stack spacing='4'>
        <Heading as="h2" size="2xl" color='nossas.blue'>PROGRAMA DE MOBILIZADORES REGIÃO AMAZÔNICA</Heading>
        <Text fontSize='2xl'>É uma rede composta por organizações locais que atuam em diversas regiões do Brasil por cidades mais participativas.</Text>
        <Link href='#' fontSize='2xl' fontWeight='700' color='nossas.pink'>Saiba mais +</Link>
      </Stack>
    </Stack>
  </Stack>
);

const AwesomeSliderStyled = styled(AwesomeSlider)`
  --slider-height-percentage: 30%;
  --slider-transition-duration: 575ms;
  --organic-arrow-thickness: 4px;
  --organic-arrow-border-radius: 0px;
  --organic-arrow-height: 42px;
  --organic-arrow-color: #aaaaaa;
  --control-button-background: transparent;
  --control-bullet-color: #6a6a6a;
  --control-bullet-active-color: #6a6a6a;
  --loader-bar-color: #2d00a1;
  --loader-bar-height: 4px;

  --content-background-color: none;
  --organic-arrow-height: 15px;
  --organic-arrow-thickness: 2px;

  .awssld__content > div {
    width: 100%;
  }
`

const Slider = () => (
  <AwesomeSliderStyled bullets={false}>
    <div>
      <Content />
    </div>
    <div>
      <Content />
    </div>
    <div>
      <Content />
    </div>
  </AwesomeSliderStyled>
)

export default Slider;