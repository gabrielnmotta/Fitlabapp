<h1>Fitlab App Test</h1> 

<p align="center">
  <img src="https://img.shields.io/static/v1?label=react-native&message=framework&color=blue&style=for-the-badge&logo=REACT"/>
  
   <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
</p>

> Status do Projeto: :heavy_check_mark:  (concluido)

### Tópicos 

:small_blue_diamond: [Objetivo do projeto](#objetivo-do-projeto)

:small_blue_diamond: [Requisitos](#Requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

## Objetivo do projeto 

<p align="justify">
  Desenvolver um aplicativo móvel para ajudar os usuários a acompanhar sua
ingestão de alimentos e manter um registro de suas atividades físicas. O aplicativo deve ser
responsivo e fácil de usar.
</p>

## Requisitos

:heavy_check_mark: Página de Registro/Login  

:heavy_check_mark: Página Principal 

:heavy_check_mark: Configuração do Mockoon

:heavy_check_mark: Página de Pesquisa de Alimentos

:heavy_check_mark: Página de Pesquisa de Atividades Físicas

:heavy_check_mark: Gráficos e Estatísticas

## Como preparar a aplicação :arrow_forward:

No terminal, clone o projeto: 

```
git clone https://github.com/gabrielnmotta/Fitlabapp.git
```

Após clonar o projeto entre na pasta Fitlabapp e rode os seguintes comandos:
```
yarn ou yarn install
```
Após esse procedimento configure o mockoon
## Como configurar o Mockoon

Abra o terminal cmd

```
ipconfig 
```

Copie o IPV4, vá no mockoon na aba "Settings" e na API URL cole o IPV4. Após isso abra o arquivo "fitlabAPI.json" que está dentro do respositório dentro do mockoon.
Feito isso no código do programa vá na pasta "src", depois na pasta "constants" e no arquivo "AmbientVariables.ts" identifique o API_URL e mude o IPV4 para o seu.

## Rodando o projeto
Volte para o código e executa o seguinte comando:

```
npx expo start
```

Após a execução irá carregar e após carregar você pode abrir tanto pelo celular com o aplicativo expo Go ou emulando android no computador.

## Linguagens, dependencias e libs utilizadas :books:

- [React Native](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)

## Tarefas em aberto

:memo: Para demonstração com uso completo do firebase integrar ele totalmente.

## Desenvolvedores/Contribuintes :octocat:

| [<img src="https://avatars.githubusercontent.com/u/6764501?v=4" width=115><br><sub>gabriel Nogueira</sub>](https://github.com/gabrielnmotta)
| :---: |

## Licença 

Copyright :copyright: 2023 - Fitlab Test App
