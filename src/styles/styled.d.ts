import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            background: string;
            backgroundButton: string;
            textButton: string;
            primary: string;
            title: string;
            text: string;
            accent: string;
        },
    }
}