import Head from 'next/head';
import { ILBday } from 'assets';
import { Box, Container, Text, Button, useMediaQuery } from '@chakra-ui/react';
import { useWindowSize } from 'react-use';
import { useRouter } from 'next/router';

export default function Home() {
  const Router = useRouter();

  const { height } = useWindowSize(undefined, 896);
  const [iphone11] = useMediaQuery(['(min-height: 800px)']);

  return (
    <>
      <Container
        py="16"
        gridTemplateRows="auto 1fr auto"
        display="grid"
        height={height}
        maxWidth="450px"
      >
        <Box pt={iphone11 ? '28' : '8'} px="6" mb="10">
          <ILBday width="100%" height="100%" />
        </Box>
        <Box px="4">
          <Text
            color="pink.400"
            fontSize="3xl"
            fontWeight="semibold"
            textAlign="center"
            mb="3"
          >
            Hi Shinta, <br /> This is your birthday
          </Text>
          <Text color="gray.500" fontSize="md" mb="6" textAlign="center">
            Congratulation for reaching this stage of your life
          </Text>
        </Box>
        <Button
          onClick={() => Router.push('/password')}
          mx="auto"
          colorScheme="pink"
          w="90%"
        >
          Go to Main Menu
        </Button>
      </Container>
    </>
  );
}
