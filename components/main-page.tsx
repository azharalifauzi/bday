import { Box, Button, Container, Grid, Text } from '@chakra-ui/react';
import { useWindowSize, useMeasure } from 'react-use';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import type { CreateTypes, Options } from 'canvas-confetti';
import { useState } from 'react';
import { ILGift, ILVideo } from 'assets';
import ModalVideo from './modal-video';
import ModalGift from './modal-gift-v2';

const MainPage = () => {
  const [age, setAge] = useState<string | number>(0);
  const [modalStatus, setModalStatus] = useState<
    'idle' | 'wish' | 'video' | 'gift'
  >('idle');
  const confettiRef = useRef<CreateTypes | null>(null);
  const pageTwoRef = useRef<HTMLDivElement>(null);

  const { height } = useWindowSize(undefined, 896);
  const [photo, { width }] = useMeasure<HTMLDivElement>();

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
      setAge(26);
    }, 1500);
  }, []);

  return (
    <>
      <ModalGift
        isOpen={modalStatus === 'gift'}
        onClose={() => setModalStatus('idle')}
      />
      <ModalVideo
        title="Birthday Wishes"
        isOpen={modalStatus === 'wish'}
        onClose={() => setModalStatus('idle')}
        url="https://www.youtube.com/watch?v=jK24QJXym0w"
      />
      <ModalVideo
        title="Birthday Video"
        isOpen={modalStatus === 'video'}
        onClose={() => setModalStatus('idle')}
        url="https://www.youtube.com/watch?v=VyVMjGXJdos"
      />
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
      <Box style={{ height }} minH="620px" overflowY="scroll">
        <Container
          style={{
            height: '100%',
            gridTemplateRows: `minmax(${width}px, auto) 1fr 1fr auto`,
          }}
          display="grid"
          py="10"
          maxW="450px"
          gridRowGap="4"
        >
          <Box
            ref={photo}
            mx="auto"
            width="65%"
            borderRadius="50%"
            overflow="hidden"
          >
            <Image
              layout="responsive"
              src="/cici.jpg"
              width={1}
              height={1}
              alt="Birthday Person"
              objectFit="cover"
              objectPosition="top"
            />
          </Box>
          <Box alignSelf="center">
            <Text
              color="yellow.300"
              fontWeight="semibold"
              fontSize="3xl"
              textAlign="center"
            >
              Happy Birthday Cici
            </Text>
            <Text px="6" mt="2" textAlign="center" color="gray.500">
              Sending you smiles for every moment of your special day. Have a
              wonderful time and a very happy birthday.
            </Text>
          </Box>
          <Box alignSelf="center">
            <Text
              fontWeight="bold"
              color="yellow.300"
              fontSize="5xl"
              textAlign="center"
            >
              {age}
            </Text>
          </Box>
          <Button
            onClick={() => {
              if (pageTwoRef.current) pageTwoRef.current.scrollIntoView(true);
            }}
            mx="auto"
            colorScheme="yellow"
            w="90%"
            color="white"
          >
            Watch Birthday Wishes
          </Button>
        </Container>
        <Container
          py="10"
          maxW="450px"
          height="100%"
          ref={pageTwoRef}
          display="grid"
          gridTemplateRows="repeat(2, 1fr)"
          alignItems="center"
          justifyItems="center"
          gridGap="6"
        >
          <Grid justifyItems="center" gridGap="6">
            <Text fontSize="2xl" fontWeight="bold" color="yellow.300">
              Birthday Wish
            </Text>
            <Box w="60%">
              <ILVideo height="100%" width="100%" />
            </Box>
            <Button
              onClick={() => setModalStatus('wish')}
              variant="outline"
              colorScheme="yellow"
            >
              Watch Video
            </Button>
          </Grid>
          <Grid justifyItems="center" gridGap="6">
            <Text fontSize="2xl" fontWeight="bold" color="yellow.300">
              Birthday Video
            </Text>
            <Box w="60%">
              <ILGift height="100%" width="100%" />
            </Box>
            <Button
              onClick={() => setModalStatus('video')}
              variant="outline"
              colorScheme="yellow"
            >
              Open Video
            </Button>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default MainPage;
