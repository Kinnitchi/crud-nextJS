interface BotaoProps {
  cor?: "green" | "blue" | "gray";
  className?: string;
  children: any;
  onClick?: () => void;
}

export default function Botao(props) {
  const cor = props.cor ?? "gray";
  return (
    <button
      onClick={props.onClick}
      className={`
      bg-neutral-900 
      text-white px-4 py-2 rounded-md
      hover:bg-sky-700 
      ${props.className}
  `}
    >
      {props.children}
    </button>
  );
}
