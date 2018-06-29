function save(postData){
    console.log(JSON.stringify(postData))
    $.ajax({
        type:'POST',
        url:'http://localhost:8000/website/stickyBoard/?account=swes1117',
        data:{
            comment:"Hey",
        },
        success: function(response){
            if(response != "failed"){
                    

            }
            else{

            }
        },
        error: function(){
            alert("Failed")
        },
    });
}

const BoardReducer = (state = {
    boards:[],
},action) => {
    switch(action.type){
        case "add":
            state = {...state,
                title : action.payload['title'],
                comment : action.payload['comment'],
                boards: [...state.boards, action.payload]
            }
        break
        //Save to dataBase
        case "save":
            save(state.boards)
        break

        case "delete":
            let index = parseInt(localStorage["index"])
            state.boards.splice(index, 1);
        break
        //Edit Exist card
        case "edit":
            state.boards[parseInt(localStorage["index"])].title = action.payload['title']
            state.boards[parseInt(localStorage["index"])].comment = action.payload['comment']
        break
        //Get Card info from dataBase
        case "get":

        break

        case "change":
            let title_dropped = state.boards[parseInt(action.payload['dropped_index'])].title
            let title_dropping = state.boards[parseInt(action.payload['dropping_index'])].title
            let comment_dropped = state.boards[parseInt(action.payload['dropped_index'])].comment
            let comment_dropping = state.boards[parseInt(action.payload['dropping_index'])].comment
            console.log(title_dropped)
            console.log(title_dropping)
            console.log(comment_dropped)
            console.log(comment_dropping)

            state.boards[parseInt(action.payload['dropped_index'])].title = title_dropping
            state.boards[parseInt(action.payload['dropped_index'])].comment = comment_dropping
            state.boards[parseInt(action.payload['dropping_index'])].title = title_dropped
            state.boards[parseInt(action.payload['dropping_index'])].comment = comment_dropped

        break
    }
    return state
}

export default BoardReducer

