import {
    Anchor,
    Button,
    Checkbox,
    Divider,
    Group,
    PasswordInput,
    Stack,
    Text,
    TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { upperFirst, useToggle } from '@mantine/hooks';

export function LoginForm() {
    const [type, toggle] = useToggle(['login', 'register']);
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });

    return (
        <Stack gap="lg">
            <Stack gap="xs">
                <Text size="xl" fw={700} ta="center">
                    {type === 'login' ? 'Welcome back!' : 'Create your account'}
                </Text>
                <Text size="sm" c="dimmed" ta="center">
                    {type === 'login'
                        ? 'Sign in to make your predictions for Game Awards 2025'
                        : 'Join us to predict the winners of Game Awards 2025'}
                </Text>
            </Stack>

            <Divider />

            <form onSubmit={form.onSubmit(() => { })}>
                <Stack gap="md">
                    {type === 'register' && (
                        <TextInput
                            label="Name"
                            placeholder="Your name"
                            value={form.values.name}
                            onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                            radius="md"
                        />
                    )}

                    <TextInput
                        required
                        label="Email"
                        placeholder="hello@mantine.dev"
                        value={form.values.email}
                        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                        error={form.errors.email && 'Invalid email'}
                        radius="md"
                    />

                    <PasswordInput
                        required
                        label="Password"
                        placeholder="Your password"
                        value={form.values.password}
                        onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                        error={form.errors.password && 'Password should include at least 6 characters'}
                        radius="md"
                    />

                    {type === 'register' && (
                        <Checkbox
                            label="I accept terms and conditions"
                            checked={form.values.terms}
                            onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                        />
                    )}
                </Stack>

                <Button type="submit" fullWidth mt="xl" size="md" radius="md">
                    {type === 'login' ? 'Sign in' : 'Create account'}
                </Button>

                <Text ta="center" size="sm" mt="md">
                    <Text component="span" c="dimmed">
                        {type === 'register' ? 'Already have an account? ' : "Don't have an account? "}
                    </Text>
                    <Anchor component="button" type="button" onClick={() => toggle()} size="sm" fw={500}>
                        {type === 'register' ? 'Sign in' : 'Sign up'}
                    </Anchor>
                </Text>
            </form>
        </Stack>
    );
}
