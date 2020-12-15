import React, {Component} from 'react'
import {loop, sortDownAscending} from '../modun';

class question4 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            result:[],
            key:true
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      lisitem = []
      result(number){
              var item = <span>{number} </span>
                this.lisitem.push(item)
                console.log(this.lisitem)

      }
    

      handleSubmit(event){
        var array = this.state.value.split(",")
        var i=1
        var length = array.length
        while(length>=i){
            var index = length -i
            length = index
            i += 1
            if(length == 0){
                console.log('ok')
                this.setState({key:true})
            }
            if(length<i && length != 0){
                console.log('false')
                this.setState({key:false})
            }
        }

        //sap xep mang
        var array2 = sortDownAscending(array)

        var key = i-1
        var key2 = 0
        var key3 = 0
        var ok = []
        for(var i=0; i<key; i++){
            key3 =key2+i
            var result = []
            for(var j = key2; j<=key3; j++){
                result.push(array2[j])
                result.push('_')
                key2 = j+1
            }
           ok.push({result})
        }
        this.setState({result:ok})

        event.preventDefault();
      }

      handleChange(event) {
        this.setState({value:event.target.value});
        }

    render(){
        const {id, question} = this.props;
        const result = this.state.result.map((item, index) => {
            return(
                <h1 key={index}> {item.result}</h1>
            )
        })
        return(
            <div style={id === 4 ? {display:'block'} : {display:'none'}}  className="component">
                <h5> câu 4 {question}</h5>
                <div style={{marginTop:"20px"}}>
                <form style={{marginBottom:"20px"}} onSubmit={this.handleSubmit}>
                    <label>
                        Nhập chuỗi bất kỳ: <br/>
                        <input  style={{marginTop:"10px"}} 
                                type="text"
                                name="name" 
                                onChange={this.handleChange}
                                placeholder="ex: 1,2,3,4,5,..."
                        />
                    </label>
                    <input style={{marginLeft:"5px"}} type="submit" value="Run" />
                </form>
                {/* {result} */}
                {this.state.key ? result : <h1>mang ko du dieu kien</h1>}
                </div>
            </div>
        )
    }
}

export default question4;