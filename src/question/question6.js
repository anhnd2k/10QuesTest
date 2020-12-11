import React, {Component} from 'react'

class question6 extends Component{
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
        var number = this.state.value
        
        const fibonaci = (a) => {
            if(a == 0 || a == 1){
                return 1
            }else{
                return(fibonaci(a-2) + fibonaci(a-1))
            }
        }
        var result = []
        for(var i=0; i<number; i++){
            // i[0]=i[1]=1
            // if(i>=2){
            //     number[i] = number[i-1] + number[i-2]
            //     console.log(number[i])
            // }
            result.push(fibonaci(i))
            if(0>=i>=1){
                result.push(1)
            }else{
                for(var i=0; i<result.length; i++){
                    console.log(result[parseInt(result.length)])
                }
                
            }


        }

        console.log(result)

        event.preventDefault();
      }

    handleChange(event) {
    this.setState({value:event.target.value});
    }

    render(){
        const {id, question} = this.props;
        return(
            <div style={id === 6 ? {display:'block'} : {display:'none'}}  className="component">
                <h5> câu 6: {question}</h5>
                <div style={{marginTop:"20px"}}>
                <form style={{marginBottom:"20px"}} onSubmit={this.handleSubmit}>
                    <label>
                        Nhập số nguyên bất kì: <br/>
                        <input  style={{marginTop:"10px"}} 
                                type="text"
                                name="name" 
                                onChange={this.handleChange}
                                placeholder="9999"
                        />
                    </label>
                    <input style={{marginLeft:"5px"}} type="submit" value="Run" />
                </form>



                </div>
            </div>
        )
    }
}

export default question6;