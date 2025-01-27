# Activity

Usuario : ```user@example.com```
Password : ```123456789```

## Minha Visão

A primeira coisa que eu pensei quando vi a prova foi em kanban, apesar de ter me dado muita dor de cabeça principalmente quando começei pois não fazia ideia de como criar o "agarrar" e "soltar", mas ao decorrer do projeto eu pude aplicar muitas coisas interessantes como por exemplo o "web Socket" do firebase e fazer meus cards se atualizaram automaticamente quando há uma alteração no banco.

Aprendi vários conceitos legais do react como o drag e drop, que apesar de ter me dado uma dor de cabeça foi muito legal de executar. Eu gostei de ter criado essa aplicação, bem como o desafio de criar tudo isso em um final de semana, espero ter a chance de me juntar a equipe e poder trabalhar com vocês.

## O que eu faria diferente ?

Seria um pouco menos ambicioso, uma aplicação mais simples.
Claro que com um tempo maior de execução eu teria terminado outras funcionalidades que tinha em mente, mas se um dia der continuidade a este projeto com certeza ja ele ja esta preparado para receber novas atualizações, como por exemplo um botão que adiciona mais estados (filas).

## Resumo

Apesar de no começo eu ter ficado bem assustado eu acho que me sai bem com a execução.

Aprendi muita coisa nova, se eu fosse fazer de novo com toda certeza a experiência que eu tenho agora me faria avançar muito mais rápido.

## O projeto

Uma aplicação WEB, desenhada para controlar atividades.
Na aplicação deve ser possível:

### Dados

- [x] Controle de status
  - [x] Pendente
  - [x] Em Andamento
  - [x] Finalizado
  - [x] Cancelado

![image](https://user-images.githubusercontent.com/62211295/116022301-52029f80-a620-11eb-9ec0-0e8d7f14b0ca.png)


- [x] Card:
  - [x] Titulo
  - [x] Descrição
  - [x] Responsável

![image](https://user-images.githubusercontent.com/62211295/116022282-457e4700-a620-11eb-9469-ae4f142a7555.png)

### Funcionalidades

- [X] Modificar o status de uma atividade

![image](https://user-images.githubusercontent.com/62211295/116022223-27b0e200-a620-11eb-8f20-040992d9a1b3.png)

- [X] Modificar o responsável por uma atividade

![image](https://user-images.githubusercontent.com/62211295/116022250-34353a80-a620-11eb-9c3e-6d3ac0d3ced2.png)

- [X] Na atividade deve ser possível ver o histórico de eventos

![image](https://user-images.githubusercontent.com/62211295/116022357-6c3c7d80-a620-11eb-86a7-f760410c7f05.png)


### Autenticação

- [X] A aplicação deve possuir autenticação simples. Pode utilizar a autenticação nativa do Firebase.

![image](https://user-images.githubusercontent.com/62211295/116022159-051ec900-a620-11eb-806d-68269e3b0f54.png)


### Desafio

- [ ] Campo descrição terá que realizar um Carga-> funtion usando BigQuery ou Elasticserach para realizar busca diretamente neste campo.

## Regras de negócio

1.O Front End deve ser em React JS.
2.Todos os componentes devem ser próprios de modo que não deve ser utilizada lib externa como Material UI, ou algo similar.
3.Os componentes devem ser function components , utilizando hooks.
A base de dados deve ser Firestore, do Firebase (Google). Para isto pode criar uma conta gratuita no firebase e utilizar a SDK JS do firebase.
4.Não é necessário utilizar redux, mas pode usar se desejar.
Pode utilizar um pré-compilador de SASS/SCSS/LESS para o CSS, mas não é obrigatório, no entanto o estilo em sí também será levado em conta,
6.Pode utilizar Type Script, se não, JS no mínimo ES6.
9.Insira mais de 1 milhão de registros criando um script de carga e teste com postman este teste lendo de CSV
