import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Text,
  } from '@chakra-ui/react';
  
  const FraudAlertModal = ({ isOpen, onClose, alertDetails }) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Fraud Alert Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{alertDetails}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };
  
  export default FraudAlertModal;
  