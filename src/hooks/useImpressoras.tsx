import React, { useEffect, useState } from "react";
import api from "../utils/api";

export interface IImpressora {
    id: number;
    impressora: string;
    modelo: string;
    departamento_id: number;
}

export const useImpressoras = ({ idDepto }: any) => {
    const [impressoras, setImpressoras] = useState<IImpressora[]>([]);

    useEffect(() => {
        if (!idDepto) return;
        api.get(`impressoras/${idDepto}`).then((response) => {
            setImpressoras(response.data);
        })
    }, [idDepto]);

    return {
        impressoras
    };
}