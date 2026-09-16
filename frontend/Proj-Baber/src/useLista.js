import { useEffect, useState } from 'react'
import { api } from './api'

// Hook que busca uma rota da API e devolve os 3 estados de tela:
// carregando, erro e dados.
export function useLista(rota) {
  const [dados, setDados] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    let ativo = true

    setCarregando(true)
    setErro(null)

    api
      .get(rota)
      .then(({ data }) => {
        if (ativo) setDados(data)
      })
      .catch(() => {
        if (ativo) setErro('Não foi possível carregar. Confira se a API está no ar.')
      })
      .finally(() => {
        if (ativo) setCarregando(false)
      })

    return () => {
      ativo = false
    }
  }, [rota])

  return { dados, carregando, erro }
}
