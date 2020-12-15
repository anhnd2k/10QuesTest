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
        var a = 1;
		var b = 1;
        var c;
        var arrayResult = []
		if(number<1)
			console.log("Không tồn tại dãy số Fibonacci");
		else if(number == 1)
            arrayResult.push(a)
		else if(number == 2)
            arrayResult.push(a,b)
		else
		{
			arrayResult.push(a,b)
			for(var i=2; i<number;i++)
			{
				c = a+b;
				arrayResult.push(c)
				a = b;
				b = c;
			}
			
		}

        // console.log(arrayResult)
        this.setState({array:arrayResult})
        event.preventDefault();
      }

    handleChange(event) {
    this.setState({value:event.target.value});
    }

    render(){
        const {id, question} = this.props;
        const result = this.state.array.map((data,index) => {
            return(
            <h1 key={index} style={{marginRight:'10px'}}>{data}</h1>
            )
        })
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
                    <input style={{paddingRight:"5px"}} type="submit" value="Run" />
                </form>

                <div >
                    {result}
                </div>

                </div>
            </div>
        )
    }
}

export default question6;