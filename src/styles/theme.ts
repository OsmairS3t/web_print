import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
    colors: {
        background: '#e9f0f5',
        backgroundButton: '#75828a',
        textButton: '#e9f0f5',
        primary: '#cfdde6',
        title: '#31373b',
        text: '#31373b',
        accent: '#0880AE',
    },
}

const darkTheme: DefaultTheme = {
    colors: {
        background: '#31373b',
        backgroundButton: '#e0dfdc',
        textButton: '#75828a',
        primary: '#0880AE',
        title: '#e9f0f5',
        text: '#e9f0f5',
        accent: '#0880AE',
    },
}

export { lightTheme, darkTheme }
