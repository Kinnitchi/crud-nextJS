import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo } from "./icones";

interface TabelaProps {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}

export default function Tabela(props: TabelaProps) {
  const exibirAcoes = props.clienteExcluido || props.clienteSelecionado;

  function renderizarCabecalho() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Email</th>
        <th className="text-left p-4">Idade</th>
        {exibirAcoes ? <th className="p-4">Acões</th> : false}
      </tr>
    );
  }
  function renderizarDados() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr
          key={cliente.id}
          className={`${i % 2 === 0 ? "bg-neutral-400" : "bg-neutral-200"}`}
        >
          <td className="text-left p-4">{cliente.id}</td>
          <td className="text-left p-4">{cliente.nome}</td>
          <td className="text-left p-4">{cliente.email}</td>
          <td className="text-left p-4">{cliente.idade}</td>
          <td>{exibirAcoes ? renderizarAcoes(cliente) : false}</td>
        </tr>
      );
    });
  }
  function renderizarAcoes(cliente: Cliente) {
    return (
      <td className="flex justify-center">
        {props.clienteSelecionado ? (
          <button
            onClick={() => props.clienteSelecionado?.(cliente)}
            className={`flex justify-center item-center text-green-600 rounded-full p-2 m-1
          hover:bg-neutral-100`}
          >
            {IconeEdicao}
          </button>
        ) : (
          false
        )}

        {props.clienteExcluido ? (
          <button
            onClick={() => props.clienteExcluido?.(cliente)}
            className={`flex justify-center item-center text-red-600 rounded-full p-2 m-1
            hover:bg-neutral-100`}
          >
            {IconeLixo}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`
        text-white
        bg-gradient-to-r from-neutral-900 to-neutral-700
      `}
      >
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}
