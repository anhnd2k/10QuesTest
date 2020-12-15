import React, {Component} from 'react'
import {filterArray} from '../modun'

class question5 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            n:'',
            ok:[]

        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.OnN = this.OnN.bind(this);
      }

      result(array, n, ok) {
        for (let i = 0; i < array.length - 1; i++) {
            if(array[i] !==n && array[i] < n){
                for (let j = i; j < array.length; j++) {
                    if(array[j] !==n && array[j] < n){
                        if (parseInt(array[i]) + parseInt(array[j]) == n) {
                            if (i != j) {
                                ok.push({ index1: i, index2: j });
                            }
                        }
                    }
                }
            }
        }
    }

    handleSubmit(event) {      
        var a = this.state.value.split(",")
        var n = this.state.n
        var check = null
        
        var ok = []
        if(a[1] === undefined){
            check = -1
            alert("Nhập sai form yêu cầu, vui lòng nhập lại!")
        }

        // var array = filterArray(a,n)

        // console.log(array)
        this.result(a, n, ok);
        this.setState({ok:ok})
        event.preventDefault();
      }

    handleChange(event) {
        this.setState({value:event.target.value});
    }
    OnN(event){
        this.setState({n:event.target.value});
    }

    render(){
        const {id, question} = this.props;
        const kq = this.state.ok.map((data, index) => {
            return (
                <h1 key={index}>[{data.index1} , {data.index2}]</h1>
            )
        })
        return(
            <div style={id === 5 ? {display:'block'} : {display:'none'}}  className="component">
                <h5> câu 5 {question}</h5>
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
                    <br/>
                    <label>
                        <br/>
                        Nhập n: <br/>
                        <input  style={{marginTop:"10px"}} 
                                type="text"
                                name="name" 
                                onChange={this.OnN}
                        />
                    </label>
                    <br/>
                    <input style={{marginLeft:"5px", marginTop:"20px"}} type="submit" value="Run" />
                </form>

                {kq}

                </div>
            </div>
        )
    }
}

export default question5;