import Tabela from '../components/Tabela.jsx'
import { useLista } from '../useLista'

function Produtos() {
  const { dados, carregando, erro } = useLista('/produtos')

  if (carregando) return <p className="aviso">Carregando produtos…</p>
  if (erro) return <p className="aviso aviso--erro">{erro}</p>
  if (dados.length === 0) return <p className="aviso">Nenhum produto cadastrado ainda.</p>

  return (
    <section>
      <h1 className="titulo">Produtos</h1>
      <p className="subtitulo">O que usamos na cadeira, você leva pra casa.</p>
      <Tabela itens={dados} />
    </section>
  )
}

export default Produtos
