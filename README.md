# passagens

Projeto para calcular rotas mais baratas de acordo com dados já cadastrados

# implementação

Busquei organizar o projeto utilizando alguns principios SOLID e baseado em um design DDD 

a implementação usando padrões como inversão de controle e injeção de dependências deixa o código mais limpo e fácil de ser testado.

Preferi usar um banco de dados em vez de um arquivo CSV, mas o design desenvolvido permite que a forma de armazenar ou o bd seja trocado de forma fácil. 
Também estou usando Redis para fazer o cache, só para dar um exemplo de como otimizar o desempenho.
Coloquei um docker-compose pra subir o container dos dois localmente, só não adicionei a aplicação no docker-compose para ficar mais simples de rodar e analisar o código, mas deixei o dockerfile, caso necessário posso adicionar no compose pra subir os três containers juntos.

# Como rodar local

Abra um terminal e digite: yarn ou npm install

depois suba o container do banco mysql e do redis digitando: docker-compose up --build -d

assim que terminar o deploy dos containers, abra um novo terminal
digite o comando: yarn run dev ou npm run dev

envie uma requisição do tipo POST para: http://localhost:5001/route

com um body: {"from": "GRU", "to":"SCL", price:18 }

adicione quantas rotas achar necessário, para o projeto eu adicionei as rotas conforme a documentação do teste. 

após adicionar as rotas é possível calcular a mais barata.

faça uma requisição do tipo GET para http://localhost:5001/quote/GRU/SCL

sendo a primeira localidade a origem e a segunda o destino final

# Como rodar os tests unitários

yarn run test ou npm run test

se quiser ver a cobertura

yarn run test --coverage ou npm run test --coverage