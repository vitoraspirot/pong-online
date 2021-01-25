export default function renderScreen(screen, game, requestAnimationFrame, currentUserId){

    const context = screen.getContext('2d')

    game.moveBall()
    context.clearRect(0,0,700,400)

    const left = game.state.bars['left']
    context.fillStyle = 'white'
    context.fillRect(left.x,left.y,left.w,left.h)

    const right = game.state.bars['right']
    context.fillStyle = 'white'
    context.fillRect(right.x,right.y,right.w,right.h)
            
    const ball = game.state.balls['ball']
    context.fillStyle = 'white'
    context.fillRect(ball.x,ball.y,ball.w,ball.h)

    context.font = '50px Arial'
    context.fillText(left.score, 50, 50)
    context.fillText(right.score, 620, 50)

    if(game.state.bars['left'].id == currentUserId){
        const currentPlayer = game.state.bars['left']
        context.fillStyle = '#F0DB4F'
        context.fillRect(currentPlayer.x, currentPlayer.y, currentPlayer.w, currentPlayer.h)
    }else if(game.state.bars['right'].id == currentUserId){
        const currentPlayer = game.state.bars['right']
        context.fillStyle = '#F0DB4F'
        context.fillRect(currentPlayer.x, currentPlayer.y, currentPlayer.w, currentPlayer.h)
    }
    requestAnimationFrame(() => {
        renderScreen(screen, game, requestAnimationFrame, currentUserId)
    })
}