# Resolução

> Demonstração disponível no [GitHub Pages](https://hugotannus.github.io/conexalabs_desafio_frontend)

A resolução para o *Desafio \<front>developer\</end> ConexaLabs* foi implementada utilizando o framework **Vue 3**, incluindo as bibliotecas **Vuex** e **VueRouter**.

Para atender aos requisitos de layout e estilização de componentes, foram utilizados, onde aplicável, alguns dos principais conceitos e convenções sugeridos pela [metodologia B.E.M.](https://en.bem.info/methodology/). Implementação feita com o pré-processador **SASS**.

Testes realizados com **Mocha** (e **Chai**).

> O histórico completo da solução [neste repositório](https://github.com/hugotannus/conexalabs_desafio_frontend).

## Execução

A solução não requer instalação prévia, e pode ser executada abrindo o arquivo `index.html` diretamente no navegador, ou criar uma instância da aplicação com o auxílio de servidores locais, como o `http-server` ou o `live-server`.

## Testes

Os testes podem ser executados também sem nenhuma instalação prévia. Basta abrir o arquivo `index.html`, localizado no diretório `tests/`.

Caso tenha instanciado um servidor local para a aplicação, basta acessar o caminho relativo ao arquivo de teste diretamente da barra de endereços do navegador:


```
http://localhost:8080/tests/index.html
```

---

# Desafio \<front>developer\</end> ConexaLabs 2019

Quer fazer parte da transformação do campo ~~escrevendo~~ codando o futuro do agronegócio?

Se deseja participar do nosso processo seletivo, siga as instruções deste desafio e execute os seguintes passos:

* Nos mande sua resolução em um *pull request* neste repositório.

* Deixe a aplicação disponível publicamente em algum host ([GitHub Pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/),  [Firebase Hosting](https://firebase.google.com/docs/hosting), [Azure](https://azure.microsoft.com/pt-br/services/app-service/web/), ou qualquer um de sua preferência) para testes.

* Por último, envie um email para [renatto.machado@hubconexa.com](mailto:renatto.machado@hubconexa.com) com seu CV anexado e o link da aplicação;



# Sobre a Conexa

A [Conexa](http://hubconexa.com/) é um hub de inovação que vive o agronegócio e é protagonista em sua transformação e unimos pessoas que compartilham a crença de que o mundo pode ser mais sustentável e que o trabalho pode ser mais prazeroso.

A equipe da Conexa Labs tem o propósito de tornar o agro mais simples, usando o que há de mais avançado em tecnologia para construir produtos e ferramentas que conectam pessoas e negócios aos resultados desejados.



# O desafio

Você implementará uma aplicação web **responsiva** que consulta os dados de empresas em uma API, armazena no LocalStorage e mostra no mapa o endereço da empresa selecionada.



## Requisitos

1. Consulta de empresas pelo CNPJ;
   1. O número do CNPJ deve ser válido antes de executar a requisição na API;
   2. Caso o CNPJ não exista, o usuário deve ser informado;
   3. Os dados da empresa devem ser armazenados no LocalStorage do navegador, se o usuário sair da página e voltar a lista de empresas consultadas anteriormente deve ser recuperada do LocalStorage;
2. Mostrar uma lista em cards das empresas consultadas;
3. Mostrar os dados da empresa e a localização no mapa;



## Protótipos

[Neste link](https://invis.io/Q6T6JI44FTY#/376025753_pesquisa) você encontrará os protótipos *navegáveis* feitos no Invision e [aqui](https://invis.io/Q6T6JI44FTY#/376033742_style_Guide) você poderá ver o style guide.

O layout e a estilização devem seguir a risca os protótipos e o style guide, tirando isso, você tem oportunidade de mostrar todo seu talento e criatividade.



## Recomendações

* Utilize um destes três frameworks: VueJS, React ou Angular;
* Utilize SASS ou LESS;
* Utilize a UI Library que preferir. Sugestões: [Element](https://element.eleme.io/), [Bootstrap](https://getbootstrap.com/), [Material](https://material.io/design/);
* API de Consulta de CNPJs: https://receitaws.com.br/
* Utilize ECMAScript 5 ou 6;
* Linguagens: JavaScript ou TypeScript;
* Utilize boas práticas de codificação, isso será avaliado;
* Mostre que você manja dos paranauê do CSS3 (implemente animações, transições, efeitos, seja livre para voar!);
* Código limpo, organizado e documentado (quando necessário);
* Use e abuse de:
  * Usabilidade;
  * Criatividade;
  * Performance;
  * Manutenabilidade;
  * Testes Unitários (quando necessário)
  * ... pois avaliaremos tudo isso!
