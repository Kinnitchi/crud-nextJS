import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
  cliente: Cliente;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);
  const [email, setEmail] = useState(props.cliente?.email ?? "");
  return (
    <div>
      {id ? <Entrada somenteLeitura texto="Codigo" valor={id} /> : false}
      <Entrada texto="Nome" valor={nome} valorMudou={setNome} />
      <Entrada
        texto="Idade"
        valor={idade}
        tipo="number"
        valorMudou={setIdade}
      />
      <Entrada texto="Email" valor={email} tipo="text" valorMudou={setEmail} />
      <div className="flex justify-end mt-5">
        <Botao className={`hover:bg-green-600 mr-2`}>
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao className={`hover:bg-red-500`}>Cancelar</Botao>
      </div>
    </div>
  );
}
