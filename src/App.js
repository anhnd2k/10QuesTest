
import './App.css';
import React,{ Component } from 'react';
import Question1 from './question/question1';
import Question2 from './question/question2';
import Question3 from './question/question3';
import Question4 from './question/question4';
import Question5 from './question/question5';
import Question6 from './question/question6';
import Question7 from './question/question7';
import Question8 from './question/question8';
import Question9 from './question/question9';
import Question10 from './question/question10';


var listQ = [
  {
    id:1,
    title:'Câu 1',
    question:'cho mảng số nguyên, sắp xếp mảng theo chiều tăng, giảm dần?'
  },
  {
    id:2,
    title:'Câu 2',
    question:'Cho vào một chuỗi string, in ra chuỗi đảo ngược?'
  },
  {
    id:3,
    title:'Câu 3',
    question:'Nhập vào một mảng số nguyên, kiểm tra mảng đó có phải hình núi không?'
  },
  {
    id:4,
    title:'Câu 4',
    question:'Cho một mảng số nguyên, sắp xếp mảng theo chiều kim tự tháp?'
  },
  {
    id:5,
    title:'Câu 5',
    question:'Cho mảng số nguyên, nhập vào số nguyên n bất kỳ, tìm ra những cặp số có tổng bằng n và in ra vị trí cặp?'
  },
  {
    id:6,
    title:'Câu 6',
    question:'nhập vào số nguyên n, in ra mã fibonaci?'
  },
  {
    id:7,
    title:'Câu 7',
    question:'Cho vào một mảng số nguyên, In ra biểu đồ hình cây nhị phân?'
  },
  {
    id:8,
    title:'Câu 8',
    question:'Nhập vào một mảng, tìm số lớn nhất, nhỏ nhất?'
  },
  {
    id:9,
    title:'Câu 9',
    question:'Nhập vào mảng số nguyên . Sắp xếp các phần tử lẻ theo chiều tăng dần, chẵn giữ nguyên?'
  },
  {
    id:10,
    title:'Câu 10',
    question:'Nhập vào mảng số nguyên. In ra màn hình chuỗi giữ giá trị liền nhau lớn nhất?'
  },
]
class App extends Component{

  constructor(props){
    super(props);
    this.state ={
      question:'',
      id:''
    }
  }

  render(){
    const list = listQ.map((data, index) => {
      return(
        <ul onClick={ () => this.setState({question:data.question, id: data.id})} href="#" style={this.state.id === index+1 ? {backgroundColor:'#e3f9fc'} : {}} key={index}>
          <li>
            <a> {data.title} </a>
          </li>
        </ul>
      )
    })
    return(
      <div className="App">
      <h1>
        abc
      </h1>
      <div className="list">
        
          {list}
        
      </div>
      <Question1 id={this.state.id} question={this.state.question}/>
      <Question2 id={this.state.id} question={this.state.question}/>
      <Question3 id={this.state.id} question={this.state.question}/>
      <Question4 id={this.state.id} question={this.state.question}/>
      <Question5 id={this.state.id} question={this.state.question}/>
      <Question6 id={this.state.id} question={this.state.question}/>
      <Question7 id={this.state.id} question={this.state.question}/>
      <Question8 id={this.state.id} question={this.state.question}/>
      <Question9 id={this.state.id} question={this.state.question}/>
      <Question10 id={this.state.id} question={this.state.question}/>

    </div>
    )
  }
}

export default App;
