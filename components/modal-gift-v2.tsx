import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';

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
          <Text color="cyan.400" fontWeight="bold" textAlign="center">
            Hadiah Menyusul yaaaa 😝
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalGift;
