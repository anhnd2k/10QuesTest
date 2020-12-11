import React, {Component} from 'react';
import {sortUpAscending, sortDownAscending} from '../modun';

class question1 extends Component{

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            arrayUp: [],
            arrayDown: [],

        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit(event) {      
        var array1 = this.state.value.split(",")
        var array2 = this.state.value.split(",")
        var check = null
        if(array1[1] === undefined){
            check = -1
            alert("Nhập sai form yêu cầu, vui lòng nhập lại!")
            this.setState({value: ''})
        }

        const arrayUpAscending = sortUpAscending(array1)

        if(check === null){
            this.setState({arrayUp:arrayUpAscending})
        }

        const arrayDownAscending = sortDownAscending(array2)

        if(check === null){
            this.setState({arrayDown:arrayDownAscending})
        }
        event.preventDefault();
      }

    handleChange(event) {
    this.setState({value:event.target.value});
    }

    render(){
        const {id, question} = this.props;
        return(
            <div style={id === 1 ? {display:'block'} : {display:'none'}}  className="component">
                <h5> câu 1 {question}</h5>
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

                <h3 style={{marginBottom:"20px"}}>sắp xếp mảng tăng dần: {this.state.arrayUp}</h3> 
                <h3>sắp xếp mảng giảm dần: {this.state.arrayDown}</h3> 

                </div>
            </div>
        )
    }
}

export default question1;