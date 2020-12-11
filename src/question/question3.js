import React, {Component} from 'react'

class question3 extends Component{

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            array: [],

        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit(event) {      
        var a = this.state.value.split(",")
        var check = null
        if(a[1] === undefined){
            check = -1
            alert("Nhập sai form yêu cầu, vui lòng nhập lại!")
        }
        var max = 0
        var maxIndex = ''
        var index = -1
        for(let i=0; i<a.length; i++){
            if(max < a[i]){
                max = a[i]
                maxIndex = i
            }
            if(maxIndex === a.length){
                index ++
            }
           
        }

        console.log(max, maxIndex)


        event.preventDefault();
      }

    handleChange(event) {
    this.setState({value:event.target.value});
    }

    render(){
        const {id, question} = this.props;
        return(
            <div style={id === 3 ? {display:'block'} : {display:'none'}}  className="component">
                <h5> câu 3 {question}</h5>
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



                </div>
            </div>
        )
    }
}

export default question3;