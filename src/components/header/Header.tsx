import { Anchor, Burger, Container, Group, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import { Login } from '../login/Login';

const links = [
    { link: '/pricing', label: 'Pricing' },
    { link: '/learn', label: 'Learn' },
    { link: '/community', label: 'Community' },
];

export function Header() {
    const [burgerOpened, { toggle }] = useDisclosure(false);
    const [loginOpened, { open: openLogin, close: closeLogin }] = useDisclosure(false);
    const navigate = useNavigate();

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
        <>
            <header className={classes.header}>
                <Container size="lg" className={classes.inner}>
                    <div className={classes.logo} onClick={() => navigate('/')}>🎮 GAME AWARDS</div>
                    <Group gap={8} visibleFrom="xs">
                        {items}
                        <Button
                            variant="subtle"
                            onClick={openLogin}
                        >
                            Login
                        </Button>
                    </Group>

                    <Burger opened={burgerOpened} onClick={toggle} hiddenFrom="xs" size="sm" />
                </Container>
            </header>
            <Login opened={loginOpened} onClose={closeLogin} />
        </>
    );
}
