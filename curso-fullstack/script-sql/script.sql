use futebol;

CREATE TABLE jogador (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (50),
    cidade VARCHAR (70),
    salario DECIMAL
);

select * from jogador;

INSERT INTO jogador (nome, cidade, salario) VALUES
("Ronaldo Fenômeno", "Rio de Janeiro", 10000),
("Zinedine Zidane", "Marselha", 5000),
("Lucas Moura", "São Paulo", 3000);

select * from jogador; 

delete from jogador where id=2;

select * from jogador;

UPDATE jogador
	SET
		nome = "Ronaldo Fenômeno Aposentado",
        cidade = "Belo Horizonte",
        salario = "20000"
WHERE ID = 1;

select * from jogador;

UPDATE jogador
	SET
		nome = "Lucas Moura Lesionado",
        cidade = "Cotia",
        salario = "2500"
WHERE ID = 3;
        
ALTER TABLE jogador RENAME column salario TO pagode;

select * from jogador;

CREATE TABLE time (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (50),
    cidade VARCHAR (70),
    patrimonio DECIMAL
);

select * from time;

INSERT INTO time (nome, cidade, patrimonio) VALUES
("Palmeiras", "São Paulo", 1000000000),
("Flamengo", "Rio de Janeiro", 10000000),
("São Paulo", "São Paulo", -1000000);

CREATE TABLE titulo (
	id INT PRIMARY KEY AUTO_INCREMENT,
    campeonato VARCHAR (50),
    vencedor VARCHAR (70),
    ano DECIMAL
);

select * from titulo;

INSERT INTO titulo (campeonato, vencedor, ano) VALUES
("Paulistão", "Palmeiras", 2026),
("Champions", "PSG", 2025),
("Brasileirão", "Palmeiras", 2026);

