show databases;

use kgt_bank;

-- Criando uma tabela
CREATE TABLE conta (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
	saldo DECIMAL,
    senha VARCHAR(6)
    
);

-- Selecionar a tabela
SELECT * FROM conta;


-- Inserindo dados
INSERT INTO conta (nome, saldo, senha)
VALUES ('Doris', 10, '123');

SELECT * FROM conta;

INSERT INTO conta (nome, saldo, senha)
VALUES ('Caio', 3000, '321');

SELECT * FROM conta;

INSERT INTO conta (nome, saldo, senha)
VALUES ('Pedro', 400, '1234');

-- Apagando dados do banco
delete from conta where id=5;
delete from conta where id=4;
delete from conta where id=3;
delete from conta where id=4;




use usuario;

CREATE TABLE usuario(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(100),
    
);


