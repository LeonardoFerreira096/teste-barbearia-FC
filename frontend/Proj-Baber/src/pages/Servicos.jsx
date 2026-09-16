import Tabela from '../components/Tabela.jsx'
import { useLista } from '../useLista'

function Servicos() {
  const { dados, carregando, erro } = useLista('/servicos')

  if (carregando) return <p className="aviso">Carregando serviços…</p>
  if (erro) return <p className="aviso aviso--erro">{erro}</p>
  if (dados.length === 0) return <p className="aviso">Nenhum serviço cadastrado ainda.</p>

  return (
    <section>
      <h1 className="titulo">Serviços</h1>
      <p className="subtitulo">Sem hora marcada. Chegou, sentou.</p>
      <Tabela itens={dados} />
    </section>
  )
}

export default Servicos
