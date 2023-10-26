import React from "react";
import { Route, Switch } from "react-router-dom";
import Formulario from "../Pages/Inscricao";
import ConsultaInscricao from "../Pages/Consultar";

export default function Routes(){
    return (
        <Switch>
            <Route path="/inscricao">
                <Formulario />
            </Route>
            <Route path="/consulta">
                <ConsultaInscricao />
            </Route>
        </Switch>
    );
};
