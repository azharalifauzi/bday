import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Skeleton,
} from '@chakra-ui/react';
import { useState } from 'react';
import ReactPlayer from 'react-player';

interface ModalVideoProps {
  isOpen: boolean;
  onClose: () => void;
  url?: string;
  title?: string;
}

const ModalVideo: React.FC<ModalVideoProps> = ({
  isOpen,
  onClose,
  title,
  url,
}) => {
  const [isLoading, setLoading] = useState<boolean>(true);

  const handleClose = () => {
    setLoading(true);
    onClose();
  };

  return (
    <Modal isCentered onClose={handleClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent w="90%">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody position="relative">
          {isLoading ? (
            <Skeleton
              position="absolute"
              top="6"
              left="50%"
              transform="translateX(-50%)"
              w="90%"
              height={350}
            />
          ) : null}
          <Box py="6">
            <ReactPlayer
              width="100%"
              url={url ?? 'https://www.youtube.com/watch?v=HKMP2Woaf2E'}
              controls
              onReady={() => {
                setLoading(false);
              }}
              playing
            />
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalVideo;
