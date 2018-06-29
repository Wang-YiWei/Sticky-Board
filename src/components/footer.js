import React from "react"

const addCard = (store) =>{
    store.dispatch({
        type:"add",
        payload:{ 
            title:"",
            comment:""
        }
    })
}

const saveCard = (store) =>{
    store.dispatch({
        type:"save",
    })
}

const Footer = ({store}) =>{
    return(
        <footer className="page-footer font-small stylish-color-dark pt-4 mt-4 fixed-bottom">
            <button className="btn btn-primary" onClick={
                ()=>{
                    return saveCard(store)
                }
            }>Save</button>
            <button className="btn btn-success" onClick={
                () =>{
                    return addCard(store)
                }
            }>Add</button>
            <div className="footer-copyright text-center">© 2018 Copyright:
                 <a href="#"> MiniStickyBoard </a>
            </div>
        </footer>
    )
}

export default Footer
