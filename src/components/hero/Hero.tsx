import cx from 'clsx';
import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from './Hero.module.scss';

export function Hero() {
    return (
        <div className={classes.wrapper}>
            <Overlay color="#000" opacity={0.65} zIndex={1} />

            <div className={classes.inner}>
                <Title className={classes.title}>
                    Bienvenido a las predicciones para los{' '}
                    <Text component="span" inherit className={classes.highlight}>
                        Game Awards 2025
                    </Text>
                </Title>

                <Container size={640}>
                    <Text size="lg" className={classes.description}>
                        Haz tus apuestas para ver quienes seran los galardonados este año
                    </Text>
                </Container>

                <div className={classes.controls}>
                    <Button className={classes.control} variant="white" size="lg">
                        Haz tu Prediccion
                    </Button>
                    <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
                        Explora los nominados
                    </Button>
                </div>
            </div>
        </div>
    );
}
