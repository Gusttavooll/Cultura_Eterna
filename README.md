## Cultura Eterna



### Descrição do Projeto

**Cultura Eterna** é uma API REST desenvolvida com o objetivo de preservar e disseminar as ricas histórias e culturas do Brasil. Através desta API, você pode acessar informações sobre lendas urbanas e breves explicações sobre a cultura de diversas regiões e cidades do país. A ideia central é criar um repositório digital acessível a todos, mantendo viva a diversidade cultural brasileira.

**Importante:** Atualmente, a API oferece rotas específicas para a região Centro-Oeste, abrangendo os estados de Mato Grosso (MT) e Mato Grosso do Sul (MS). **O objetivo futuro é expandir a API para incluir rotas para todas as regiões e cidades do Brasil, tornando-se um abrangente acervo cultural.** Este projeto ainda está em desenvolvimento e a adição de novas regiões e funcionalidades é um processo contínuo.

Este projeto teve início como parte de um curso de programação fullstack do **Programadores do Amanha PDA**, onde foi solicitado aos alunos a criação de uma API.

### Funcionalidades Principais

A API Cultura Eterna oferece as seguintes funcionalidades para explorar a cultura da região Centro-Oeste, com rotas específicas para os estados de Mato Grosso (MT) e Mato Grosso do Sul (MS):

**Rotas para Mato Grosso (MT):**

  * `/regiao_centro_oeste`: Retorna informações gerais sobre a região Centro-Oeste.
  * `/centrooeste_MT`: Apresenta uma breve descrição sobre o estado de Mato Grosso dentro do contexto do Centro-Oeste.
  * `/cultura_MT`: Exibe informações sobre a cultura do estado de Mato Grosso.
  * `/aspecto_MT/:nomeAspecto`: Permite buscar informações específicas sobre um aspecto cultural de Mato Grosso (ex: `/aspecto_MT/culinaria`).
  * `/lendasNome_MT`: Lista os nomes das lendas urbanas de Mato Grosso.
  * `/buscarLendas_MT/:nomeLenda`: Busca detalhes sobre uma lenda específica de Mato Grosso pelo seu nome (ex: `/buscarLendas_MT/a_loira_do_banheiro`).

**Rotas para Mato Grosso do Sul (MS):**

  * `/centrooeste_MS`: Apresenta uma breve descrição sobre o estado de Mato Grosso do Sul dentro do contexto do Centro-Oeste.
  * `/cultura_MS`: Exibe informações sobre a cultura do estado de Mato Grosso do Sul.
  * `/aspecto_MS/:nomeAspecto`: Permite buscar informações específicas sobre um aspecto cultural de Mato Grosso do Sul (ex: `/aspecto_MS/artesanato`).
  * `/lendasNome_MS`: Lista os nomes das lendas urbanas de Mato Grosso do Sul.
  * `/buscarLendas_MS/:nomeLenda`: Busca detalhes sobre uma lenda específica de Mato Grosso do Sul pelo seu nome (ex: `/buscarLendas_MS/o_lobisomem`).

### Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

  * **JavaScript:** Linguagem de programação principal para o desenvolvimento da API.
  * **Express:** Framework web para Node.js, utilizado para construir a API de forma rápida e organizada.
  * **Bibliotecas Auxiliares:** Outras bibliotecas JavaScript foram utilizadas para auxiliar em funcionalidades específicas da API (detalhes podem ser encontrados no `package.json`).

### Instruções de Uso

Para acessar as informações da API Cultura Eterna, basta fazer requisições HTTP GET para as rotas mencionadas nas funcionalidades principais. Por exemplo, para obter informações sobre a cultura do Mato Grosso, você pode acessar a URL base da API seguida da rota `/cultura_MT`.

**Exemplo de requisição (assumindo que a API esteja rodando em `http://localhost:3000`):**

```
http://localhost:3000/cultura_MT
```

### Contribuições

Contribuições são bem-vindas\! Se você deseja colaborar com o projeto Cultura Eterna, você pode:

  * **Adicionar mais elementos ao banco de dados:** Compartilhe histórias, lendas e informações culturais de outras regiões e cidades do Brasil.
  * **Desenvolver rotas para novas regiões e cidades:** Ajude a expandir a cobertura geográfica da API.
  * **Melhorar a eficiência da API:** Contribua com otimizações de código, novas funcionalidades ou correções de bugs.

Sinta-se à vontade para abrir issues para propor melhorias ou relatar problemas e enviar pull requests com suas contribuições.

### Licença

Este projeto não possui uma licença específica definida no momento. Caso você tenha alguma preferência de licença, por favor, mencione na seção de "Issues" para que possamos discutir e definir a mais adequada.

### Informações Adicionais

É importante notar que as informações contidas no banco de dados foram coletadas de diversas fontes na internet. Embora tenhamos buscado informações precisas, é possível que algumas delas contenham imprecisões ou variações. Agradecemos qualquer correção ou informação adicional que possa enriquecer e aprimorar a precisão do nosso banco de dados.

### Autores

  * Gustavo Alves ([GitHub](https://github.com/Gusttavooll))

Agradecemos o seu interesse no projeto Cultura Eterna e esperamos expandir em breve nosso acervo cultural para todo o Brasil\!
