Para subir o ambiente, execute:
  docker compose up -d

A aplicação estará disponível em:
  http://localhost:8080

Para acessar o container do banco de dados e consultar os registros:

  docker exec -it db bash
  mysql -uroot -p
  # senha: root

  USE nodedb;
  SELECT * FROM people;