import React from 'react'

const editComment = (event,store) => {
    console.log(event.target.id)
    console.log(event.target.id[event.target.id.length-1])
    if(!isNaN(event.target.id[event.target.id.length-2]))
        localStorage["index"] = event.target.id[event.target.id.length-2] + event.target.id[event.target.id.length-1]
    else if(!isNaN(event.target.id[event.target.id.length-1]))
        localStorage["index"] = event.target.id[event.target.id.length-1]
    store.dispatch({
        type:"edit",
        payload:{
            title:document.getElementById("title"+localStorage["index"]).value,
            comment:document.getElementById("comment"+localStorage["index"]).value,
        }
    })
}

const deleteComment = (event,store) =>{
     if(!isNaN(event.target.id[event.target.id.length-2]))
        localStorage["index"] = event.target.id[event.target.id.length-2] + event.target.id[event.target.id.length-1]
    else if(!isNaN(event.target.id[event.target.id.length-1]))
        localStorage["index"] = event.target.id[event.target.id.length-1]
    store.dispatch({
        type:"delete",
    })
}
// change cardindex1 and cardindex2 infomation
const changeComment = (index1,index2,store) => {
        store.dispatch({
            type:"change",
            payload:{
                dropping_index:index1,
                dropped_index:index2
            }
        })
}

const dragStart = (event,index) => {
    console.log("dragStart")
    console.log(event.target)
    console.log(index)
    event.dataTransfer.setData("index",index)
}

const dragOver = (event) => {
    event.preventDefault()
}

const drop = (event,store) =>{
    console.log("Drop!!")
    event.preventDefault()
    let form_been_dropped = traverse_find_form(event.target)
    let index_dropped = getIndex(form_been_dropped.id)
    let index_dropping = event.dataTransfer.getData("index")
    console.log("form"+index_dropping+ " drop to form"+index_dropped)
    changeComment(index_dropping,index_dropped,store)
}

const getIndex = (id) => {
    console.log("get index")
    console.log(id)
    let index = id.substring(4,id.length)
    console.log(index)
    return index
}

const traverse_find_form = (child) => {
    while(child.tagName != "FORM"){
        child = child.parentElement
    }
    return child
}
const Card = ({store, content,index}) =>{
    if(content){
     return(
         <form id={"form"+index} 
            className="col-md-3" 
            draggable 
            onDragStart = {(e) => dragStart(e,index)} 
            onDragOver = {(e) => dragOver(e)}
            onDrop = {(e) => drop(e,store)} 
         >
             <div className="form-group">
                 <label htmlFor="title">Title</label>
                 <input type="text" className="form-control card_input" id={"title"+index} value={content.title} onChange = {(event)=>{
                    return editComment(event,store)    
                }}/>
             </div>
             <div className="form-group">
                 <label htmlFor="comment">Comments</label>
                 <textarea className="form-control card_input" rows="4" cols="25" id={"comment"+index} value={content.comment} onChange ={(event)=>{
                    return  editComment(event,store) 
                 }}/>
             </div>
             <div>
            <input type="color" id="bg-color" name="color" value="#ffffff" />
            <label for="background">Background</label>
            </div>  

            <div>
                <input type="color" id="text-color" name="color" value="#ab7a30" />
                <label for="text">Text</label>
            </div>
             <div className = "delete-btn-div">
                <button type="button" id={"delete"+index} className="btn btn-link" onClick = {(event)=>{
                    return deleteComment(event,store)
                }}>Delete</button>
            </div>
         </form>
     )
   }
}

export default Card
