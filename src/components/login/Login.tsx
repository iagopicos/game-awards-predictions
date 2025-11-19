import { Container } from '@mantine/core';
import { LoginForm } from './LoginForm';
export function Login() {
    return (
        <Container size={420} my={40}>
            <LoginForm />
        </Container>
    );
}
