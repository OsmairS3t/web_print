import React, { useEffect, useState } from "react";
import api from "../utils/api";

export interface Impressoras {
    id: number;
    impressora: string;
    modelo: string;
    ip: string;
    departamento_id: number;
}

export interface ILeitura {
    id: string;
    data_leitura: Date;
    leitura: number;
    impressora_id: number;
    impressoras: Impressoras;
}

export const useLeituras = ({ idImpressora }: any) => {
    const [leituras, setLeituras] = useState<ILeitura[]>([]);

    useEffect(() => {
        if (!idImpressora) return;
        api.get(`leituras/${idImpressora}`).then((response) => {
            setLeituras(response.data);
        })
    }, [idImpressora]);

    return {
        leituras
    };
}