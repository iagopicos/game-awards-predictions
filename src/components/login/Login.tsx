// src/components/login/LoginPage.tsx

import { Container } from '@mantine/core';
import { LoginForm } from './LoginForm';
// Importa el formulario que acabamos de limpiar
// Asumo que tu AuthenticationForm está en el mismo directorio

export function Login() {
    return (
        <Container size={420} my={40}>
            <LoginForm />
        </Container>
    );
}
