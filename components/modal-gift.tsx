import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from '@chakra-ui/react';
import writeText from 'copy-to-clipboard';

interface ModalGiftProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalGift: React.FC<ModalGiftProps> = ({ isOpen, onClose }) => {
  const toast = useToast();

  const handleCopy = (value: string) => {
    try {
      writeText(value);
      toast({
        title: 'Copy Success',
        description: `Successfully Copied No. Resi ${value}`,
        isClosable: true,
        duration: 3000,
        status: 'success',
      });
    } catch (err) {
      if (process.env.NODE_ENV === 'development') console.error(err);
      toast({
        title: 'Failed to copy',
        description: 'Consider to copy the text manually',
        isClosable: true,
        duration: 3000,
        status: 'error',
      });
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal isCentered onClose={handleClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent w="90%">
        <ModalHeader>Birthday Gift</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb="6" position="relative">
          <Text fontSize="sm" mb="2">
            No. Resi
          </Text>
          <Flex
            background="gray.100"
            borderRadius="0.5rem"
            px="4"
            py="2"
            justifyContent="space-between"
            alignItems="center"
            mb="4"
          >
            <Text fontWeight="bold" color="pink.400" fontSize="2xl">
              19998374701
            </Text>
            <Button
              onClick={() => handleCopy('19998374701')}
              variant="outline"
              size="xs"
              colorScheme="pink"
            >
              COPY
            </Button>
          </Flex>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            recusandae fuga, distinctio eum voluptate labore deleniti
            consectetur incidunt dolorem deserunt eius magni dolor inventore,
            libero beatae magnam velit iusto maiores!
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalGift;
