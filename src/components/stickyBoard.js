import React from "react"
import Card  from "./card"   
import Footer from "./footer"
const renderBoards = (store) => {
    let cardList = []
    let index = -1
    if(store.getState().BoardReducer != null){
        cardList = store.getState().BoardReducer['boards'].map(cardContent =>{
            index++ 
            return (<Card store={store} content={cardContent} key={index} index={index}/>)
        })
    }
    return cardList
}
export default class StickBoard extends React.Component{
    render(){
        return(
            <div>
                <div className="row">
                    {renderBoards(this.props.store)}
                </div>
                <Footer store={this.props.store}/>
            </div>
        )
    }
}
