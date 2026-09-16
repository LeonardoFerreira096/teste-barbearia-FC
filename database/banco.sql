-- TABELA DE PRODUTOS
CREATE TABLE IF NOT EXISTS produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    marca VARCHAR(100) NOT NULL
);

-- TABELA DE SERVICOS
CREATE TABLE IF NOT EXISTS servicos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL
);

-- INSERIR 5 PRODUTOS
INSERT INTO produtos (nome, preco, marca) VALUES
('Pomada Modeladora', 35.00, 'QOD Barber Shop'),
('Shampoo Masculino', 28.90, 'Keune'),
('Óleo para Barba', 32.50, 'Don Alcides'),
('Pente Profissional', 15.00, 'Marco Boni'),
('Navalha para Barbeiro', 45.00, 'Andis');

-- INSERIR 3 SERVICOS
INSERT INTO servicos (nome, preco) VALUES
('Corte de Cabelo', 35.00),
('Barba', 25.00),
('Corte + Barba', 55.00);
