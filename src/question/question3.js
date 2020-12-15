import React, {Component} from 'react'
import {findMax, returnArray, checkArray, checkIndex} from '../modun'

class question3 extends Component{

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            array: [],
            result:false,
            isShow:false

        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit(event) {      
        var array = this.state.value.split(",")
        var check = null
        if(array[1] === undefined){
            check = -1
            alert("Nhập sai form yêu cầu, vui lòng nhập lại!")
        }

        var data = findMax(array)
        var max = data[0]
        var index = data[1]
        var indexMax = checkIndex(max,array)
        //chia mang
        var arrayLeft = returnArray(0, index, array)
        var arrayRight = returnArray(index+1, array.length, array)
        //check mang co tang dan, giam dan ko
        var checkArrayLeft = checkArray(arrayLeft)
        var checkArrayRight = checkArray(arrayRight)
        
        //ketqua
        var result = -1

        if(indexMax !== -1){
            result +=1
        }else{
            if(arrayLeft.length >1 && arrayRight.length >1){
                if(checkArrayLeft === -1 && checkArrayRight !== -1){
                    result = -1
                }else{
                    result +=1
                }
            }else{
                if(arrayLeft[0] < max && arrayRight[0] < max){
                    result = -1
                }else{
                    result +=1
                }
            }
        }

        if(result === -1){
            this.setState({result:true, isShow:true})
        }else{
            this.setState({isShow:true})
        }
        
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

                {this.state.result ? <h1>Là mảng hình núi</h1> :  <h1 style={this.state.isShow ? {display:'block'} : {display:'none'}}> Không phải là mảng hình núi</h1>}


                </div>
            </div>
        )
    }
}

export default question3;