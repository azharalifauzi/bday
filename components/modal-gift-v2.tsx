import {
  Box,
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
import Image from 'next/image';
import writeText from 'copy-to-clipboard';

interface ModalGiftProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalGift: React.FC<ModalGiftProps> = ({ isOpen, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal isCentered onClose={handleClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent w="90%">
        <ModalHeader textAlign="center">Birthday Gift</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb="6" position="relative">
          <Box mb="6">
            <Image
              alt="khaby"
              src="/khaby.png"
              width={1}
              height={1}
              layout="responsive"
            />
          </Box>
          <Text color="pink.400" fontWeight="bold" textAlign="center">
            The present is probably on your hand 😅
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalGift;
