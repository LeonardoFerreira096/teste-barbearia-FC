const express = require('express')
const cors = require('cors')
const pool = require('./db')

const app = express()
const PORT = Number(process.env.PORT) || 3000

app.use(cors())
app.use(express.json())


app.get('/health', async (_req, res) => {
  try {
    await pool.query('SELECT 1')
    res.json({ api: 'ok', banco: 'ok' })
  } catch (err) {
    res.status(503).json({ api: 'ok', banco: 'indisponivel', detalhe: err.message })
  }
})


app.get('/produtos', async (_req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT id, nome, preco, marca FROM produtos ORDER BY id'
    )
    res.json(rows)
  } catch (err) {
    console.error('Falha ao buscar produtos:', err.message)
    res.status(500).json({ erro: 'Nao foi possivel buscar os produtos.' })
  }
})


app.get('/servicos', async (_req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT id, nome, preco FROM servicos ORDER BY id'
    )
    res.json(rows)
  } catch (err) {
    console.error('Falha ao buscar servicos:', err.message)
    res.status(500).json({ erro: 'Nao foi possivel buscar os servicos.' })
  }
})

app.use((_req, res) => {
  res.status(404).json({ erro: 'Rota nao encontrada.' })
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API da barbearia rodando na porta ${PORT}`)
})
