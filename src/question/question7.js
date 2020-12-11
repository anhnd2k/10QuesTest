import React, {Component} from 'react'

class question7 extends Component{
    render(){
        const {id, question} = this.props;
        return(
            <div style={id == 7 ? {display:'block'} : {display:'none'}}  className="component">
                <h5> câu 7 {question} </h5>
            </div>
        )
    }
}

export default question7;