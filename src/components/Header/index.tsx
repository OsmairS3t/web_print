import React, { useContext, useState } from "react";
import Switch from 'react-switch';
import { ThemeContext } from "styled-components";
import { shade } from 'polished'
import { Link } from "react-router-dom";
import { AppThemeContext } from "../../App";

import { Container, Title, Titulo, Menu, Item } from './styles';

export function Header() {
    const { colors } = useContext(ThemeContext);
    const { isDarkTheme, setIsDarkTheme } = useContext(AppThemeContext);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    return (
        <Container>
            <Title>
                <Titulo>Titulo da página</Titulo>
                <Switch
                    onChange={toggleTheme}
                    checked={isDarkTheme}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={40}
                    handleDiameter={20}
                    offColor={shade(0.1, colors.primary)}
                    onColor={colors.primary}
                />
            </Title>
            <Menu>
                <Item><Link to='/'>Home</Link></Item>
                <Item><Link to='/importacao'>Importação</Link></Item>
                <Item><Link to='/leituras'>Leituras</Link></Item>
            </Menu>
        </Container>
    )
}