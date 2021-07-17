import {
  Button,
  Container,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  Box,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import React, { useState } from 'react';
import { useWindowSize } from 'react-use';
import { ILSecureFile } from 'assets';
import { useRouter } from 'next/router';

const PasswordPage = () => {
  const Router = useRouter();

  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [show, setShow] = useState<boolean>(false);
  const { height } = useWindowSize(undefined, 896);

  const handleClick = () => setShow(!show);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (errors[name]) setErrors((err) => ({ ...err, [name]: false }));

    setPassword(value);
  };

  const handleSubmit = () => {
    if (password !== 'ShintaHBD2021!') {
      setErrors((err) => ({
        ...err,
        password: true,
      }));
      return;
    }

    Router.push('/main-page');
  };

  return (
    <Container
      display="flex"
      flexDir="column"
      justifyContent="center"
      height={height}
      maxW="450px"
    >
      <Box mb="8">
        <ILSecureFile width="100%" height="100%" />
      </Box>
      <FormControl mb="4" isInvalid={errors.password}>
        <InputGroup size="md">
          <Input
            pr="12"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            value={password}
            onChange={handleChange}
            name="password"
          />
          <InputRightElement width="12">
            {!show ? (
              <Icon color="gray.600" onClick={handleClick} as={FiEye} />
            ) : (
              <Icon color="gray.600" onClick={handleClick} as={FiEyeOff} />
            )}
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>Opps password yang dimasukkan salah</FormErrorMessage>
      </FormControl>
      <Button onClick={handleSubmit} colorScheme="pink">
        Submit
      </Button>
    </Container>
  );
};

export default PasswordPage;
