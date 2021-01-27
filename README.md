# Pong Online
> Jogo web online baseado no jogo Pong.

Cada jogador controla uma paleta (barra vertical) no jogo movendo-a verticalmente. Os jogadores usam as paletas para acertar a bola e mandá-la para o outro lado. Sempre que a bola bater em uma paleta sua direção muda no eixo x e se bater no teto ou na base da quadra ela muda de direção no eixo y. O objetivo é fazer pontos em seu oponente, fazendo com que o oponente não consiga retornar a bola para o outro lado.

Assim que um usuário acessa o jogo ele vai para uma fila de usuários conectados, onde o primeiro da fila controla a paleta da esquerda e o segundo a da direita (a paleta toma a cor amarela para o jogador que a controla). Todos os outros usuários da fila podem apenas assistir o jogo, onde assim que um dos jogadores for desconectado ou perder o jogo a fila atualiza e os jogadores mudam com base nas posições da fila.

## Configuração para Desenvolvimento

O jogo foi desenvolvido no Windows 10, feito com HTML5, CSS6, Javascript, Node.js, Express e Socket.io. Instalações necessárias para o desenvolvimento:

```sh
npm init
npm install express socket.io
```

## Meta

Vitor Aspirot do Couto D Avila Trindade – vitoraspirot@gmail.com

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

[https://github.com/vitoraspirot](https://github.com/vitoraspirot)
