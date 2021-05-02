const appReducer = (state,action) => {
    switch(action.type){
        case "update":
            return{
                ...state,
                selectedParagraph:action.payload
            }
        case "testInfo":{
            const text = action.payload.split('')
            const testInfo = text.map((cur)=>{
                return {
                    testLetter:cur,
                    status:"notAttempted"
                }
            })
            return {
                ...state,
                testInfo
            }
        }
        case "startTimer":{
            return {
                ...state,
                timeStarted:true,
            }
        }

        case "updateTimer": {
            return {
                ...state,
                timeRemaining: state.timeRemaining > 0 ? state.timeRemaining-1 : state.timeRemaining
                }
            }
        case "manageUnderflow": {
            let tempTest = [
                {
                    testLetter:state.testInfo[0].testLetter,
                    status:"notAttempted"
                },
                ...state.testInfo.slice(1)
            ]
            return {
                ...state,
                testInfo:tempTest,
                characters:action.payload.characters,
                words:action.payload.words

            }
        }

        case "manageOverflow":{
            return {
                ...state,
                characters:action.payload.characters,
                words:action.payload.words
            }
        }
        
        case 'normalCase':{
            const {index,inputValue,words,characters} = action.payload
            let tempTest = state.testInfo
            if(!(index === state.selectedParagraph.length - 1)){
                tempTest[index+1].status = "notAttempted"
            }

            const isCorrect = inputValue[index] === tempTest[index].testLetter
            tempTest[index].status = isCorrect ? "correct" : "incorrect"
            
            const wpm = parseInt((state.words/(60-state.timeRemaining+1))*60)

            return {
                ...state,
                testInfo:tempTest,
                words,
                characters,
                wpm
            }

        }

        case "reStart":{
            return {
                ...action.payload,
                id:state.id+1
            }
        }
        
        }

      

          
        


    }


export default appReducer