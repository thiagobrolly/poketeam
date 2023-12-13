# PokéTeam

## Descrição

Este projeto consiste em um sistema onde treinadores podem se cadastrar, criar e gerenciar um time de Pokémon.

## Estrutura do Projeto

- `api/`: Pasta contendo o código do backend.
  - `Dockerfile`: Arquivo para construção do container Docker do backend.
- `frontend/`: Pasta contendo o código do frontend.
  - `Dockerfile`: Arquivo para construção do container Docker do frontend.
- `docker-compose.yml`: Arquivo de configuração do Docker Compose.

## Funcionalidades

1. **Cadastro de Treinadores**: Funcionalidade para os treinadores se cadastrarem com nome e senha.
2. **Criação de Time de Pokémons**: Permitir aos treinadores criar times de até 5 pokémons.
3. **Listagem de Pokémons da API**: Exibir todos os pokémons disponíveis na API.
4. **Filtro de Pokémons**: Permitir filtrar por nome, tipo ou ambos, com feedback adequado se não encontrar o pokémon.
5. **Visualização das Evoluções**: Capacidade de visualizar as evoluções dos pokémons.

## Tecnologias Utilizadas

- Backend: Node.js, TypeScript, Fastify, Prisma ORM, PostgreSQL.
- Frontend: React, TypeScript, Vite, Styled Components.
- Banco de Dados: PostgreSQL.
- Docker, Docker Compose.

## Instruções de Uso

1. **Pré-requisitos**: Certifique-se de ter o Docker e o Docker Compose instalados.
2. Clone o repositório: `git clone git@github.com:thiagobrolly/poketeam.git`.
3. Navegue até a pasta do projeto: `cd poketeam`.
4. Execute o Docker Compose: `docker compose up`.
5. Acesse o frontend via navegador: `http://localhost:5173`.
6. O Backend estará disponível em: `http://localhost:3333`.

## Notas Adicionais

- Verifique os arquivos de configuração dentro das pastas `api/` e `frontend/` para ajustes específicos.

## Contribuição

- Para contribuir, siga as diretrizes de contribuição.
- Reporte bugs ou sugira melhorias através das issues.

## Autor

Thiago Brolly

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).
