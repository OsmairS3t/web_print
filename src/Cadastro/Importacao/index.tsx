import React, { useState } from 'react'

import {
    Container,
    Title,
    Form,
    Field,
    Label
} from './styles';

export function Importacao() {
    const [file, setFile] = useState('');

    function handleSubmitFile() {
        console.log(file)
    }

    return (
        <Container>
            <Title>Importar arquivo xml</Title>
            <Form onSubmit={handleSubmitFile}>
                <Field>
                    <Label>Arquivo:</Label>
                    <input
                        type='file'
                        name='file'
                        value={file}
                        onChange={() => setFile(file)}
                    />
                </Field>
                <Field>
                    <input type='submit' />
                </Field>
            </Form>
        </Container>
    )
}