import {
  Stack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
  Center,
} from "@chakra-ui/react";

type TxModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function TxModal({
  isOpen,
  onClose,
}: TxModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Waiting Transaction</ModalHeader>
        <ModalBody>
          <Stack spacing={4}>
            <p>
              Application is building transaction to create your account, this can
              take up to 1 minute. Please be patient.
            </p>
            <Center width="100%">
              <Spinner size="xl" speed="1.5s"/>
            </Center>
          </Stack>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
