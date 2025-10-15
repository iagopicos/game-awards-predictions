import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './App.css'
import HomePage from './components/homepage/HomePage';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';

function App() {

    return (
        <MantineProvider defaultColorScheme='dark'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </MantineProvider>
    )
}

export default App
