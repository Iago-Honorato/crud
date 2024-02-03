/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useState } from "react"
import Layout from "../src/components/Layout";
import Tabela from "../src/components/Tabela";
import Botao from "../src/components/Botao";
import Formulario from "../src/components/Formulario";
import useClientes from "../src/hooks/useClientes";

export default function Home() {



  const {
    cliente, 
    clientes, 
    selecionarCliente, 
    excluirCliente, 
    novoCliente,  
    salvarCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()


  return (
    <div className={`
      flex
      justify-center
      items-center
      h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white

    
    `}>

      <Layout title="Cadastro simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">

              <Botao cor="green" className="mb-4"
                onclick={novoCliente}>
                Novo Cliente
              </Botao>

            </div>

            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => exibirTabela()}
          />
        )}

      </Layout>
    </div>
  )
}