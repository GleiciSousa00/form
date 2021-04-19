import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FomularioCadastro/FormularioCadastro"
import 'fontsource-roboto';
import {Container, Typography } from "@material-ui/core"
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

import {validarCpf, validarSenha} from "./models/cadastro";

class App extends Component {
  render(){
    return(
      <Container component="article" maxWidth= "sm">
        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
         <ValidacoesCadastro.Provider value={{cpf:validarCpf, senha:validarSenha, nome:validarSenha}}>
          <FormularioCadastro aoEnviar={aoEnviarForm} />
         </ValidacoesCadastro.Provider> 
      </Container>
        );
    }
  }
 function aoEnviarForm(dados){
   console.log(dados);
 }

export default App;
