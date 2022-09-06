import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Titulo = styled.h3`
    width: 100%;
    padding-left: 70px;
    font-size: 2rem;
    text-align: center;
`;

export const Menu = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Item = styled.div`
    margin: 0px;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    transition: opacity 0.2s;
    
    &:hover{
        opacity: 0.5;
    }
`;