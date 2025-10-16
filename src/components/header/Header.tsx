import { Anchor, Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.scss';
import { useNavigate } from 'react-router-dom';

const links = [
    { link: '/login', label: 'Login' },
    { link: '/pricing', label: 'Pricing' },
    { link: '/learn', label: 'Learn' },
    { link: '/community', label: 'Community' },
];

export function Header() {
    const [opened, { toggle }] = useDisclosure(false);
    const navigate = useNavigate()
    const items = links.map((link) => (
        <Anchor
            key={link.label}
            className={classes.link}
            onClick={() => {
                navigate(link.link);
            }}
        >
            {link.label}
        </Anchor>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <div>LOGO</div>
                <Group gap={5} visibleFrom="xs">
                    {items}
                </Group>

                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>
        </header>
    );
}
