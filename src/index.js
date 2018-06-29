import React from "react"
import ReactDOM from "react-dom"
import StickBoard from "./components/stickyBoard"
import {createStore, applyMiddleware, combineReducers} from "redux"
import logger from "redux-logger"
import BoardReducer from "./reducers/boardReducer"
import ControlReducer from "./reducers/controlReducer"

const store = createStore(combineReducers({BoardReducer,ControlReducer})
   ,{}
   ,applyMiddleware(logger) 
)


const render = () =>{
    ReactDOM.render(<StickBoard store={store}/>, document.getElementById("react-container"))
}

store.subscribe(render)
render()
