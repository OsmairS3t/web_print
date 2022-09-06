import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Leituras } from "../Cadastro/Leituras";
import { Importacao } from "../Cadastro/Importacao";
import { Home } from "../Home";
import { DefaultLayout } from "../Layouts/DefaultLayout";

export default function Router() {

    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/importacao" element={<Importacao />} />
                <Route path="/leituras" element={<Leituras />} />
            </Route>
        </Routes>
    )
}