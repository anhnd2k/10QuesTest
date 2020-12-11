import React, {Component} from 'react'

class question2 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            output: ''

        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit(event) {  
        var array=this.state.value 
        var result =''   
        for(let i=array.length - 1; i >=0; i-- ){
            result+=array[i]
        }
        this.setState({output:result})
        event.preventDefault();
      }

    handleChange(event) {
    this.setState({value:event.target.value});
    }

    render(){
        const {id, question} = this.props;
        return(
            <div style={id === 2 ? {display:'block'} : {display:'none'}}  className="component">
                <h5> câu 2 {question}</h5>
                <div style={{marginTop:"20px"}}>
                <form style={{marginBottom:"20px"}} onSubmit={this.handleSubmit}>
                    <label>
                        Nhập chuỗi bất kỳ: <br/>
                        <input  style={{marginTop:"10px"}} 
                                type="text"
                                name="name" 
                                onChange={this.handleChange}
                                placeholder="ex: ngohoanganh"
                        />
                    </label>
                    <input style={{marginLeft:"5px"}} type="submit" value="Run" />
                    <h3 style={{marginTop:"30px"}}>In ra chuỗi đảo ngược: {this.state.output} </h3>
                </form>

                </div>
            </div>
        )
    }
}

export default question2;