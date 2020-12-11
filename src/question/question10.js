import React, {Component} from 'react'

class question10 extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            array: [],
            name:'',
            indexTo:'',
            indexFrom:''

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

        var coutCheck = 0 
        var coutCheck2 = 0
        var isCheckTo = ''
        var isCheckFrom = ''
        var isCheckName = ''
        for(var i=0; i<a.length; i++){
            if(a[i] === a[i+1]){
                coutCheck +=1
            }
            if(a[i] !== a[i+1]){
                if(coutCheck > coutCheck2){
                    coutCheck2 = coutCheck
                    isCheckFrom = i
                    isCheckTo = i - coutCheck
                    isCheckName = a[i]
                }
                coutCheck = 0
            }
            continue
        }

        this.setState({name: isCheckName, indexTo: isCheckTo, indexFrom:isCheckFrom})
        event.preventDefault();
      }

    handleChange(event) {
    this.setState({value:event.target.value});
    }

    render(){
        const {id, question} = this.props;
        return(
            <div style={id === 10 ? {display:'block'} : {display:'none'}}  className="component">
                <h5> câu 10: {question}</h5>
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

                <h1 style={this.state.name !== '' ? {display:'block'} : {display:'none'}}>
                    chuỗi giữ giá trị liền nhau lớn nhất là "{this.state.name}" tại vị trí [ {this.state.indexTo}, {this.state.indexFrom} ]
                </h1>

                </div>
            </div>
        )
    }
}

export default question10;