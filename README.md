# Localizador de Empresas
## O que é o Localizador de Empresas?
O localizador de empresas é uma aplicação feita utilizando o framework do Facebook React.js, a Material UI library 
da Google e hospedado no Firebase. Basicamente, é realizada uma requisição RESTful(via axios) a partir do cnpj fornecido,
que recupera da api receitaws.com.br a razão social e o endereço da empresa consultada, esse endereço então é passado pela 
API de geocoding(o ato de transformar uma string de endereço em um par de coordenadas no mapa), também da Google, e disso é 
recuperado um par de coordenadas que então passa pela api de mapas da Google (gerenciada pelo package @react-google-maps/api)
e quando clica-se em um dos cartões renderizados com os dados da empresa uma página com um mapa é renderizada com o centro do mapa
no par de coordenadas recuperado e com um marcador do google maps no local exato dessas coordenadas além de um cartão com os dados
da empresa que está sendo mostrada.

## Tecnologias utilizadas no projeto
### React+Typescript
O Localizador de Empresas foi codificado usando a versão typescript do react e sendo assim foram utilizados arquivos de declaração
de tipo que são identificados pela extensão ``` .d.ts ``` e servem como um "guia" para que a linguagem TypeScript saiba com qual
tipo de arquivo customizado ela está lidando e assim facilite que o Lint descubra esses arquivos tornando o código mais organizado
e livre de importações desnecessárias.

### Material UI Library
A material ui library também foi utilizada nesse projeto, porém para conseguir atingir o resultado esperado e tornar o aplicativo
o mais fidedigno possível ao Style Guide foi utilizado o pre-processador de Css Sass o que torna os arquivos do tipo stylesheet muito
mais organizados, legiveis e oferece ferramentas poderoas na hora de estilizar os componentes em tela.

### React hooks e encriptação hexadecimal
Além disso, para tornar a função de armazenamento em local storage a mais robusta, completa e segura possível foi utilizado um método
de encriptação hexadecimal com react hooks nas strings que são armazenadas localmente no sistema do navegador para evitar que os 
dados armazenados sejam posteriormente roubados da máquina do usuário ou interceptados por terceiros. 

### React contexts
Também foi utilizado o sistema de contextos do React para disponibilizar dados vitais à todo o projeto e assim facilitar a comunicação
de dados entre os componentes do aplicativo o que torna a renderização e manuseio de dados muito mais fácil e prático.

### Axios+REST
O cliente de requisições HTTP axios foi utilizado como alternativa à biblioteca padrão do Javascript Fetch já que ele é mais prático
e robusto no que tange a realização e manuseio de requisições RESTful.

### Firebase Hosting
Para a hospedagem do projeto foi utilizado o sistema de hosting da Firebase o que tornou prático e rápido a configuração e deploy
do projeto em uma plataforma pública web.

## Estrutura de pastas do Localizador de Empresas
+ Conexa-Labs
  - .firebase-Cache de hosting do firebase
  - public-Pasta que guarda a versão de produção do projeto
  - src-Source code do projeto
    * @types-Arquivos de declaração de tipo
    * components-Componentes React
    * contexts-Contextos React
    * hooks-Hooks React
    *pages-Páginas do projeto
    *utils-Funções lógicas utilizadas no projeto
    * _variables.scss-Pasta exclusiva para variáveis .scss
    * 404.html
    * App.tsx
    * App.test.tsx
    * index.html
    * index.scss
    * index.tsx
    * react-app-env.d.ts
    * serviceWorker.ts
    * setupTests.ts
  - .firebaserc-Arquivo de configuração do firebase
  - .gitignore-Arquivo de configuração das extensões não-comitaveis do gi
  - asset-manifest.json-Arquivo de preenchimento automático com os recursos necessários para o funcionamento da versão web do projeto
  - firebase.json-Arquivo de configuração do firebase
  - package.json-Lista de packages utilizadas no projeto
  - packag-lock.json-Arquivo de configuração dos packages
  - tsconfig.json-Arquivo de configuração do TypeScript
  - yarn.lock
  - yarn-error.log
