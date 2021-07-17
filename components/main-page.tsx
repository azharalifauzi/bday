import { Box, Button, Container, Grid, Text } from '@chakra-ui/react';
import { useWindowSize } from 'react-use';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import type { CreateTypes, Options } from 'canvas-confetti';
import { useState } from 'react';
import { ILGift, ILVideo } from 'assets';

const MainPage = () => {
  const [age, setAge] = useState<string | number>(0);
  const confettiRef = useRef<CreateTypes | null>(null);
  const pageTwoRef = useRef<HTMLDivElement>(null);

  const { height } = useWindowSize(undefined, 896);

  useEffect(() => {
    const makeShot = (particleRatio: number, opts?: Options) => {
      if (confettiRef.current)
        confettiRef.current({
          ...opts,
          origin: { y: 0.5 },
          particleCount: Math.floor(200 * particleRatio),
        });
    };

    const fire = () => {
      makeShot(0.25, {
        spread: 26,
        startVelocity: 55,
      });

      makeShot(0.2, {
        spread: 60,
      });

      makeShot(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      });

      makeShot(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
      });

      makeShot(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    };

    setTimeout(() => {
      fire();
    }, 500);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomAge = Math.random() * 60;
      setAge(randomAge.toFixed(0));
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
      setAge(23);
    }, 1500);
  }, []);

  return (
    <>
      <ReactCanvasConfetti
        style={{
          position: 'fixed',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 100,
        }}
        // @ts-ignore
        refConfetti={(instance) => (confettiRef.current = instance)}
      />
      <Box
        height={height}
        overflowY="scroll"
        style={{ scrollSnapType: 'y mandatory' }}
      >
        <Container
          display="grid"
          gridTemplateRows="auto 1fr 1fr auto"
          py="10"
          maxW="450px"
          height={height}
          gridRowGap="4"
          style={{ scrollSnapAlign: 'center' }}
        >
          <Box mx="auto" width="70%" borderRadius="50%" overflow="hidden">
            <Image
              layout="responsive"
              src="/dummy-bday-person.jpg"
              width={1}
              height={1}
              alt="Birthday Person"
              objectFit="cover"
              objectPosition="top"
            />
          </Box>
          <Box alignSelf="center">
            <Text
              color="pink.400"
              fontWeight="semibold"
              fontSize="3xl"
              textAlign="center"
            >
              Happy Birthday George
            </Text>
            <Text px="6" mt="2" textAlign="center" color="gray.500">
              Sending you smiles for every moment of your special day. Have a
              wonderful time and a very happy birthday.
            </Text>
          </Box>
          <Box alignSelf="center">
            <Text
              fontWeight="bold"
              color="pink.400"
              fontSize="5xl"
              textAlign="center"
            >
              {age}
            </Text>
          </Box>
          <Button
            onClick={() => {
              if (pageTwoRef.current)
                pageTwoRef.current.scrollIntoView({ behavior: 'smooth' });
            }}
            mx="auto"
            colorScheme="pink"
            w="90%"
          >
            See Presents
          </Button>
        </Container>
        <Container
          py="10"
          maxW="450px"
          height={height}
          style={{ scrollSnapAlign: 'center' }}
          ref={pageTwoRef}
          display="grid"
          gridTemplateRows="repeat(2, 1fr)"
          alignItems="center"
          justifyItems="center"
        >
          <Grid justifyItems="center" gridGap="6">
            <Text fontSize="2xl" fontWeight="bold" color="pink.400">
              Birthday Wish
            </Text>
            <Box w="70%">
              <ILVideo height="100%" width="100%" />
            </Box>
            <Button variant="outline" colorScheme="pink">
              Watch Video
            </Button>
          </Grid>
          <Grid justifyItems="center" gridGap="6">
            <Text fontSize="2xl" fontWeight="bold" color="pink.400">
              Birthday Gift
            </Text>
            <Box w="70%">
              <ILGift height="100%" width="100%" />
            </Box>
            <Button variant="outline" colorScheme="pink">
              Open Gift
            </Button>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default MainPage;
