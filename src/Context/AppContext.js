import React,{useReducer} from 'react'
import MyContext from "./MyContext"
import appReducer from "./AppReducer"

const AppContext = (props) => {
    const initial = {
        id:0,
        selectedParagraph:"Hello World!!",
        words:0,
        characters:0,
        wpm:0,
        timeRemaining:60,
        timeStarted:false,
        testInfo:[]
        
      }

      const [state,dispatch] = useReducer(appReducer,initial)

      // reducer functions:
      const updateParagraph = (para) => {
          
          dispatch({
              type:"update",
              payload:para
          })
      }

      const setTestInfo = (para) => {
        dispatch({
            type:'testInfo',
            payload:para
        })
      }

      const startTimer = () => {
          dispatch({
              type:"startTimer",
          })
      }

      const updateTimer = () => {
          dispatch({
              type:"updateTimer"
          })
      }

      const manageUnderflow = (data) => {

        dispatch({
            type:"manageUnderflow",
            payload:data
        })
      }

      const manageOverflow = (data) => {
          dispatch({
              type:"manageOverflow",
              payload:data
          })
      }

      const normalCase = (data) => {
          dispatch({
              type:"normalCase",
              payload:data
          })
      }

      const reStart = () => {
          dispatch({
              type:"reStart",
              payload:initial
          })
      }


    return (
        <MyContext.Provider value={
            {
            initial:state,
            type:{updateParagraph,
                setTestInfo,
                startTimer,
                updateTimer,
                manageUnderflow,
                normalCase,
                manageOverflow,
                reStart
            }
            }
        }>
            {props.children}

        </MyContext.Provider>
    )
}

export default AppContext

