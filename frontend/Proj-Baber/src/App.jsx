import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Produtos from './pages/Produtos.jsx'
import Servicos from './pages/Servicos.jsx'

function App() {
  return (
    <div className="shell">
      <header className="cabecalho">
        <div className="marca">
          <span className="marca__nome">Navalha &amp; Co.</span>
          <span className="marca__desde">Barbearia desde 1998</span>
        </div>
        <nav className="menu">
          <NavLink to="/produtos">Produtos</NavLink>
          <NavLink to="/servicos">Serviços</NavLink>
        </nav>
      </header>

      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Navigate to="/produtos" replace />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="*" element={<p className="aviso">Página não encontrada.</p>} />
        </Routes>
      </main>

      <footer className="rodape">
        Rua das Tesouras, 120 — Terça a sábado, 9h às 19h
      </footer>
    </div>
  )
}

export default App
