import { Modal } from '@mantine/core';
import { LoginForm } from './LoginForm';

interface LoginProps {
    opened: boolean;
    onClose: () => void;
}

export function Login({ opened, onClose }: LoginProps) {
    return (
        <Modal
            opened={opened}
            onClose={onClose}
            size="md"
            centered
            padding="xl"
            radius="md"
            withCloseButton={true}
        >
            <LoginForm />
        </Modal>
    );
}
