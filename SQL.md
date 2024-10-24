# Documentação SQL
![logo_SQL](https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png)

## Introdução

SQL (Structured Query Language) é uma linguagem de programação usada para gerenciar e manipular bancos de dados relacionais. É fundamental para realizar operações de consulta, inserção, atualização e exclusão de dados.

## Funcionalidades Principais

### 1. Criação de Tabelas

Para armazenar dados, primeiro precisamos criar tabelas. O comando SQL para criar uma tabela é o `CREATE TABLE`. Aqui está um exemplo de criação de uma tabela de usuários:

```sql
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    idade INT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
### 2. Inserção de Dados
Para atualizar dados existentes, utilize o comando `UPDATE`

```update
UPDATE usuarios SET idade = 31 WHERE id = 1;
```
### 3. Consulta de Dados
Para consultar dados, usamos o comando `SELECT`. Você pode selecionar todas as colunas ou apenas algumas

```select
-- Selecionar todas as colunas
SELECT * FROM usuarios;

-- Selecionar colunas específicas
SELECT nome, email FROM usuarios;
```
### 4. Atualização de Dados
Para atualizar dados existentes, utilize o comando `UPDATE`

```update
UPDATE usuarios SET idade = 31 WHERE id = 1;
```
### 5. Exclusão de Dados
Após criar uma tabela, você pode inserir dados usando o comando `INSERT INTO`. Exemplo:


```insert
INSERT INTO usuarios (nome, email, idade) VALUES ('João Silva', 'joao@example.com', 30);
```
### 6. Criação de Relacionamentos
Você pode definir relacionamentos entre tabelas usando chaves estrangeiras `foreign keys`. Aqui está um exemplo:

```sql
CREATE TABLE posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT,
    titulo VARCHAR(100),
    conteudo TEXT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
```
### 7. Consulta Avançadas
SQL também permite consultas mais complexas, como junções `JOINs`:

```insert
SELECT u.nome, p.titulo
FROM usuarios u
JOIN posts p ON u.id = p.usuario_id;
```
