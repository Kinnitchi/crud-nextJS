import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useCliente from "../hooks/useCliente";

export default function Home() {
  const {
    cliente,
    clientes,
    novoCliente,
    selecionarCliente,
    excluirCliente,
    salvarCliente,
    tabelaVisivel,
    exibirTabela,
  } = useCliente();

  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-white-500
      text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao cor="blue" className="mb-4" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  );
}
