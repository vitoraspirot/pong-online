export default function createGame(){
      
    const state = {
        bars: {
            'left':{
                x: 5,
                y: 170,
                w: 8,
                h: 60,
                id: 0,
                score: 0
            },
            'right':{
                x: 687,
                y: 170,
                w: 8,
                h: 60,
                id: 0,
                score: 0
            }
        },
        balls: {
            'ball':{
                x: 345,
                y: 195,
                w: 10,
                h: 10,
                dx: -1,
                dy: 1,
                mod: 0,
                v: 0
            }
        },
        users: []
    }
 
    const observers = []

    function start(){
        const f = 100
        setInterval(moveBall, f)
    }

    function subscribe(observerFunction){
        observers.push(observerFunction)
    }

    function notifyAll(command){
        for(const observerFunction of observers){
            observerFunction(command)
        }
    }

    function addUser(userId){
        state.users.push(userId)
        update()
         
        notifyAll({
            type: 'add-user',
            userId: userId
        })
    }

    function removeUser(userId){
        let index = state.users.indexOf(userId)
        state.users.splice( index, 1)
        update()

        notifyAll({
            type: 'remove-user',
            userId: userId
        })
    }

    function update(){
        state.bars['left'].id = state.users[0]
        state.bars['right'].id = state.users[1]
    }

    function setState(newState){
        Object.assign(state, newState)
    }

    function moveBar(command){
        notifyAll(command)

        const acceptedMoves = {
            ArrowUp(bar) {
                if(bar.y > 5){
                    bar.y -= 5
                    return
                }
                
            },
            ArrowDown(bar) {
                if(bar.y < 335){
                    bar.y += 5
                    return
                }
            }
        }

        const userId = command.userId
        const keyPressed = command.keyPressed                
        const moveFunction = acceptedMoves[keyPressed]

        if(moveFunction && state.bars['left'].id === userId){
            const bar = state.bars['left']
            moveFunction(bar)
        }else{
            if(moveFunction && state.bars['right'].id === userId){
            const bar = state.bars['right']
            moveFunction(bar)
        }}
        
    }

    function moveBall(){
        const left = state.bars['left']
        const right = state.bars['right']
        const ball = state.balls['ball']

        console.log('MOVEBALL')
                        
        if(left.x + left.w >= ball.x){
            if(ball.y + ball.h >= left.y && ball.y <= left.y + left.h){
                ball.dx = 1
                ball.mod += 0.2
            }
            else{
                newRound('right')
            }
        }else if(ball.x + ball.w >= right.x){
            if(ball.y + ball.h >= right.y && ball.y <= right.y + right.h){
                ball.dx = -1
                ball.mod += 0.2
            }
            else{
                newRound('left')
            }
        }

        if(ball.y <= 0){
            ball.dy = 1
        }else if(ball.y + ball.h >= 400){
            ball.dy = -1
        }

        ball.x += (ball.v + ball.mod) * ball.dx
        ball.y += (ball.v + ball.mod) * ball.dy

        notifyAll({
            type: 'move-ball',
            newState: state
        })
        
    }

    function newRound(win){
        const ball = state.balls['ball']
        const left = state.bars['left']
        const right = state.bars['right']
        if(win == 'left'){
            left.score +=1
        }else{
            right.score +=1
        }

        ball.v = 1
        ball.x = 345
        ball.y = 195
        ball.mod = 0
        ball.dx *= -1
    }

    return {
        state,
        start,
        addUser,
        removeUser,
        update,
        setState,
        moveBar,
        moveBall,
        newRound,
        subscribe     
    }
}