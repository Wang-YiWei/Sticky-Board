import React from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types'
export default class Summary extends React.Component{
    render(){
        const {name, age, salary} = this.props
        return(
            <div>
                 <h1>name : {name}</h1>
                 <h1>age :{age}</h1>
                 <h1>salary :{salary}</h1>
            </div>
        )
    }
}

Summary.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    salary: PropTypes.number
}

Summary.defaultProps = {
    name: "Tim",
    age: 20,
    salary: 72000
}
