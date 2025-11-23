import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import './App.css'
import HomePage from './components/homepage/HomePage';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';

const theme = createTheme({
    fontFamily: 'Outfit, system-ui, -apple-system, sans-serif',
    headings: {
        fontFamily: 'Outfit, system-ui, -apple-system, sans-serif',
        fontWeight: '700',
    },
    primaryColor: 'violet',
    defaultRadius: 'md',
    colors: {
        dark: [
            '#C1C2C5',
            '#A6A7AB',
            '#909296',
            '#5c5f66',
            '#373A40',
            '#2C2E33',
            '#25262b',
            '#1A1B1E',
            '#141517',
            '#101113',
        ],
    },
    components: {
        Button: {
            defaultProps: {
                radius: 'md',
            },
        },
        TextInput: {
            defaultProps: {
                radius: 'md',
            },
        },
        PasswordInput: {
            defaultProps: {
                radius: 'md',
            },
        },
    },
});

function App() {

    return (
        <MantineProvider theme={theme} defaultColorScheme='dark'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </MantineProvider>
    )
}

export default App
