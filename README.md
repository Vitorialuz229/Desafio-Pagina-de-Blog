# Desafio de Desenvolvimento de Página de Blog
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![SCSS](https://img.shields.io/badge/SCSS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

## Visão Geral

Este projeto é um desafio técnico para uma posição de desenvolvedor web. O objetivo é desenvolver uma página de blog responsiva que liste os artigos mais recentes, destaque os mais novos, liste tópicos recomendados para leitura e permita a inscrição em uma newsletter.

## Tecnologias Utilizadas

- Angular 17
- SCSS
- Bootstrap
- HTML
- TypeScript
- Json serve
- Angular Material Icons
- Figma
- Google Icons

## Requisitos

- [X] **Design Responsivo**: A página deve ser responsiva e se adaptar a diferentes tamanhos de tela.
- [X] **Listagem de Artigos**: Exibir os artigos mais recentes com suporte a paginação.
- [X] **Destaque dos Artigos Recentes**: Destacar os artigos mais novos na página.
- [X] **Tópicos Recomendados**: Listar tópicos recomendados para leitura.
- [X] **Inscrição na Newsletter**: Permitir que os usuários insiram seu email para se inscrever na newsletter. Exibir uma mensagem de sucesso após a inscrição (não é necessário implementar a requisição POST).
- [X] **Uso de Frameworks**: O uso de frameworks é opcional.
- [X] **Controle de Versão**: Versionar a aplicação no GitHub e fornecer o link.

## Design

O design da página está disponível no Figma:
[Figma Design](https://www.figma.com/design/Z44WeokaH96IqCTg78Ztgd/%F0%9F%92%BB---Aionz-%5BWebsite%5D---Teste-Desenvolvimento?node-id=2463-4196&t=5MZiChbwTrJsMsJj-1)

## API

### Posts
Endpoint: `https://669fef04b132e2c136ff9d28.mockapi.io/api/v1/posts?page=1&limit=10`

### Tópicos
Endpoint: `https://669fef04b132e2c136ff9d28.mockapi.io/api/v1/topics`

## Instruções

1. Certifique-se de ter o Node.js e npm instalados:

>Para usar Angular 17, é recomendado ter uma versão recente do Node.js e >npm. O Angular 17 provavelmente exige versões atualizadas para aproveitar >as melhorias e correções de bugs mais recentes. Geralmente, as versões >mais recentes de Angular são compatíveis com Node.js LTS (Long Term >Support).

>Como referência, até Angular 16, as versões de Node.js recomendadas eram >14.x e 16.x. Portanto, para Angular 17, é seguro considerar o uso de uma >dessas versões ou uma versão ainda mais recente. 

2. Clone este repositório.

```bash

git clone https://github.com/Vitorialuz229/Desafio-Pagina-de-Blog.git

```

3. Instale as dependências.

```bash 

npm install

```

4. Execute a aplicação 

```bash

ng serve 

npm start

```

Abra o navegador e acesse http://localhost:4200/.

```bash

  json-server db.json
  
```
>Certifique-se de que o arquivo db.json esteja configurado com os dados de exemplo necessários para os endpoints de posts, tópicos e inscrições na newsletter. O Json-server fornecerá um endpoint local para a inscrição na newsletter, que pode ser utilizado pela aplicação Angular para simular o processo de envio de dados.
