import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import tableForm from "./tableForm";

export default function useCliente(){
  const repo: ClienteRepositorio = new ColecaoCliente();

  const { tabelaVisivel, formularioVisivel, exibirTabela, exibirForm} = tableForm()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(obterTodos, []);

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      exibirTabela()
    });
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente);
    exibirForm()
  }
  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente);
    exibirTabela()
  }
  function novoCliente(cliente: Cliente) {
    setCliente(Cliente.vazio());
    exibirForm()
  }
  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente);
    exibirTabela()
  }

  return {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    tabelaVisivel,
    exibirTabela
  }
}