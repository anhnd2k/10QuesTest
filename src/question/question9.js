import React, {Component} from 'react'

class question9 extends Component{
        constructor(props) {
            super(props);
            this.state = {
                value: '',
                array1:[],
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
            this.setState({value: ''})
        }
        var test = []
        for(var i=0; i<a.length; i++){
            if(a[i]%2 !==0){
                test.push(a[i])
            }
        }

        //sap xep so le

        for(var i=0; i<test.length-1 ; i++){
            for(var j=i; j<test.length; j++){
                var check = null;
                if(test[i] > test[j]){
                    check = test[i]
                    test[i] = test[j]
                    test[j] = check
                }
            }
        }

        console.log(a)

        for(var i=0; i<a.length; i++){
            if(a[i] % 2 == 0){
                test.splice(i,0,a[i])
            }
        }
        
        this.setState({array:test})
            
    
    
            event.preventDefault();
          }
    
        handleChange(event) {
        this.setState({value:event.target.value});
        }
    
        render(){
            const {id, question} = this.props;
            return(
                <div style={id === 9 ? {display:'block'} : {display:'none'}}  className="component">
                    <h5> câu 9: {question}</h5>
                    <div style={{marginTop:"20px"}}>
                    <form style={{marginBottom:"20px"}} onSubmit={this.handleSubmit}>
                        <label>
                            Nhập mảng số nguyên bất kì: <br/>
                            <input  style={{marginTop:"10px"}} 
                                    type="text"
                                    name="name" 
                                    onChange={this.handleChange}
                                    placeholder="1,2,3,4,5,..."
                            />
                        </label>
                        <input style={{marginLeft:"5px"}} type="submit" value="Run" />
                    </form>

                    <h1>
                        {this.state.array1}
                    </h1>
    
                    <h1>
                        {this.state.array}
                    </h1>
    
                    </div>
                </div>
            )
        }
    }

export default question9;