import React, { useEffect, useState } from "react";
import api from "../utils/api";

export interface IDepartamento {
    id: number;
    departamento: string;
}

export const useDepartamentos = () => {
    const [departamentos, setDepartamentos] = useState<IDepartamento[]>([]);
    useEffect(() => {
        api.get("departamentos").then((response) => {
            setDepartamentos(response.data);
        })
    }, []);

    return {
        departamentos
    };
}