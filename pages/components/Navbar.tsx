import React from 'react';
import { Button, Flex, Link } from '@chakra-ui/react';
import Brand from './Brand';

const Navbar = () => (
  <Flex bg='nossas.blue' height='70px' paddingX='60px' alignItems='center'>
    <Brand />
    <Flex flex='1' justifyContent='center'>
      <Link href='#'>Quem somos</Link>
      <Link href='#'>Seja um ativista</Link>
      <Link hreaf='#'>Acontecendo agora</Link>
    </Flex>
    <Button size='md'>Doar</Button>
  </Flex>
);

export default Navbar;