# PONG ONLINE
## Jogo web em html/javascript baseado no primeiro jogo desenvolvido pela Atari, o Pong. 

  Pong é um jogo eletrônico de esporte em duas dimensões que simula o tênis de mesa. Cada jogador controla uma paleta (barra vertical) no jogo movendo-a verticalmente. Os jogadores usam as paletas para acertar a bola e mandá-la para o outro lado. Sempre que a bola bater em uma paleta sua direção muda no eixo x e se bater no teto ou na base da quadra ela muda de direção no eixo y. O objetivo é fazer 10 pontos antes de seu oponente, fazendo com que o oponente não consiga retornar a bola para o outro lado.
  
![PONG!](https://github.com/vitoraspirot/pong-online/blob/main/pong.gif)

Limite de jogadores: 2

Limite de usuário conectados: ???

  Assim que um usuário acessa o jogo ele vai para uma fila de usuários conectados, onde o primeiro da fila controla a paleta da esquerda e o segundo a da direita (a paleta toma a cor amarela para o jogador que a controla). Todos os outros usuários da fila podem apenas assistir o jogo, onde assim que um dos jogadores for desconectado ou perder o jogo a fila atualiza e os jogadores mudam com base nas posições da fila.
  
  Foi utilizado HTML, CSS, NODE e SOCKET.IO para fazer o jogo.
