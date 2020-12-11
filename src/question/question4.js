import React, {Component} from 'react'
import {loop} from '../modun';

class question4 extends Component{
    
    render(){
        const {id, question} = this.props;
        return(
            <div style={id === 4 ? {display:'block'} : {display:'none'}}  className="component">
                <h5> câu 4 {question} </h5>
            </div>
        )
    }
}

export default question4;