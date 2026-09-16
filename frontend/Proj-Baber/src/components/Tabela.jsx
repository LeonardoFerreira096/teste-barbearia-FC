const moeda = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})


function Tabela({ itens }) {
  return (
    <ul className="quadro">
      {itens.map((item) => (
        <li key={item.id} className="linha">
          <span className="linha__nome">
            {item.nome}
            {item.marca && <em className="linha__marca">{item.marca}</em>}
          </span>
          <span className="linha__pontos" aria-hidden="true" />
          <span className="linha__preco">{moeda.format(Number(item.preco))}</span>
        </li>
      ))}
    </ul>
  )
}

export default Tabela
