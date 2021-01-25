export default function createKeyboardListener(document){
    const state = {
        observers: [],
        userId: null
    }

    function registerUserId(userId){
        state.userId = userId
    }

    function subscribe(observerFunction){
        state.observers.push(observerFunction)
    }

    function notifyAll(command){
        for(const observerFunction of state.observers){
            observerFunction(command)
        }
    }

    document.addEventListener('keydown', handleKeydown)
    function handleKeydown(event){
        const keyPressed = event.key
        //console.log(`(${state.userId}) pressionou o botao (${keyPressed})`)
        const command = {
            type: 'move-bar',
            userId : state.userId,
            keyPressed
        }
        notifyAll(command)      
    }
    return {
        subscribe,
        registerUserId
    }    
}