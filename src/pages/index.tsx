import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente("Ana", 29, "ana@gmail.com", "1"),
    new Cliente("Bia", 33, "bia@gmail.com", "2"),
    new Cliente("Carlos", 19, "carlos@gmail.com", "3"),
    new Cliente("Igor", 25, "igor@gmail.com", "4"),
  ];

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir: ${cliente.nome}`);
  }
  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-white-500
      text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        <Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        />
      </Layout>
    </div>
  );
}
