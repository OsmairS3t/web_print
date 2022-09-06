import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h4`
    font-size: 24px;
    font-variant: small-caps;
`;

export const Lista = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const Box = styled.div`
    height: 500px;
`;

export const Form = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Field = styled.div`
    width: 500px;
    height: 90px;
    margin: 10px 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Button = styled.button`
    width: 480px;
    height: 50px;
    border-radius: 10px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.primary};
    border: 0px;
`;

export const ErroMsg = styled.span`
    color: red;
`;

