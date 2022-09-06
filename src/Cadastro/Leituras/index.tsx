import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDepartamentos } from '../../hooks/useDepartamentos';
import { useImpressoras } from "../../hooks/useImpressoras";
import { useLeituras } from "../../hooks/useLeituras";

import {
    Container,
    Title,
    Lista,
    Box,
    Form,
    Field,
    Button,
    ErroMsg
} from './styles';
import api from "../../utils/api";

interface Leitura {
    impressora_id: number;
    data_leitura: Date;
    leitura: number;
}

const schema = Yup.object().shape({
    impressora_id: Yup.number().min(1, "É necessário informar a impressora").required("É necessário informar uma impressora."),
    data_leitura: Yup.string().required("É necessário informar uma data"),
    leitura: Yup.number().required("É necesário informar a leitura"),
})

export function Leituras() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Leitura>({ resolver: yupResolver(schema) });
    const [selectedDepto, setSelectedDepto] = useState(0);
    const [selectedImpressora, setSelectedImpressora] = useState(0);
    const { departamentos } = useDepartamentos();
    const { impressoras } = useImpressoras({ idDepto: selectedDepto });
    const { leituras } = useLeituras({ idImpressora: selectedImpressora });

    const handleDeptoChange = (event: any) => {
        setSelectedDepto(event.target.value);
    }

    const handleImpressChange = (event: any) => {
        setSelectedImpressora(event.target.value);
    }

    function handleSubmitLeitura(dataForm: any) {
        api.post('leituras', dataForm);
        alert('Leitura cadastrada com sucesso.')
        reset();
    }

    function formatDate(date: string) {
        let dtYear = date.substr(0, 4)
        let dtMonth = date.substr(5, 2)
        let dtDay = date.substr(8, 2)
        return dtDay + '/' + dtMonth + '/' + dtYear;
    }

    function calculaQtde(leit: Leitura[]) {
        let vlr1 = 0;
        let vlr2 = 0;
        leit.map(l => {
            (vlr1 === 0) ?
                vlr1 = l.leitura :
                vlr2 = l.leitura
        })
        return vlr1 - vlr2;
    }

    return (
        <Container>

            <Form onSubmit={handleSubmit(handleSubmitLeitura)}>
                <Title>Incluir leituras da impressora:</Title>
                <Field>
                    <label htmlFor="Departamento">Departamento:</label>
                    <select id="Departamento" value={selectedDepto} onChange={handleDeptoChange} style={{ height: 45, borderRadius: 5, fontSize: 18, padding: 10 }} >
                        <option value="0">Selecione...</option>
                        {departamentos.map(departamento => (
                            <option key={departamento.id} value={departamento.id}>{departamento.departamento}</option>
                        ))}
                    </select>
                </Field>

                <Field>
                    <label htmlFor="Impressora_id">Impressora:</label>
                    <select id="Impressora_id" value={selectedImpressora} {...register("impressora_id")} onChange={handleImpressChange} style={{ height: 45, borderRadius: 5, fontSize: 18, padding: 10 }} >
                        <option value="0">Selecione...</option>
                        {impressoras.map(impressora => (
                            <option key={impressora.id} value={impressora.id}>{impressora.impressora} - {impressora.modelo}</option>
                        ))}
                    </select>
                    <ErroMsg>{errors.impressora_id?.message}</ErroMsg>
                </Field>

                <Field>
                    <label htmlFor="Data">Data:</label>
                    <input id="Data" {...register("data_leitura")} style={{ height: 45, borderRadius: 5, fontSize: 18, padding: 10 }} placeholder="Ex: 2022-08-01" />
                    <ErroMsg>{errors.data_leitura?.message}</ErroMsg>
                </Field>

                <Field>
                    <label htmlFor="Leitura">Leitura:</label>
                    <input id="Leitura" {...register("leitura")} style={{ height: 45, borderRadius: 5, fontSize: 18, padding: 10 }} placeholder="Ex: 252231" />
                    <ErroMsg>{errors.leitura?.message}</ErroMsg>
                </Field>

                <Button type="submit" >Cadastrar</Button>

            </Form>

            <Lista>
                <Title>Últimas Leituras da impressora:</Title>
                <Box>
                    <table width={600} border={1}>
                        <tr>
                            <td>Data</td>
                            <td>Leitura</td>
                        </tr>
                        {
                            leituras &&
                            leituras.map(leitura => (
                                <tr key={leitura.id}>
                                    <td>
                                        {formatDate(leitura.data_leitura.toString())}
                                    </td>
                                    <td>{leitura.leitura}</td>
                                </tr>
                            ))}
                        <tr>
                            <td>Quantidade no período:</td>
                            <td>
                                {calculaQtde(leituras)}
                            </td>
                        </tr>
                    </table>
                </Box>
            </Lista>

        </Container>
    )
}