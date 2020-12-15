import React, {Component} from 'react'
import {findMax,findMin} from '../modun'

class question8 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            max: 0,
            min: 0,

        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit(event) {      
        var a = this.state.value.split(",") 
        var max = findMax(a);
        var min = findMin(a);
        this.setState({max : max[0], min : min})
        event.preventDefault();
      }

    handleChange(event) {
    this.setState({value:event.target.value});
    }

    render(){
        const {id, question} = this.props;
        return(
            <div style={id === 8 ? {display:'block'} : {display:'none'}}  className="component">
                <h5> câu 8 {question}</h5>
                <div style={{marginTop:"20px"}}>
                <form style={{marginBottom:"20px"}} onSubmit={this.handleSubmit}>
                    <label>
                        Nhập mảng số nguyên: <br/>
                        <input  style={{marginTop:"10px"}} 
                                type="text"
                                name="name" 
                                onChange={this.handleChange}
                                placeholder="ex: 1,3,2,4,3,..."
                        />
                    </label>
                    <input style={{marginLeft:"5px"}} type="submit" value="Run" />
                </form>

                <h3>số lớn nhất: {this.state.max}</h3> 
                <h3>số nhỏ nhất: {this.state.min}</h3> 

                </div>
            </div>
        )
    }
}

export default question8;