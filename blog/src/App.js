// /* eslint-disable */  WARNING MESSAGE 지우기

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';  // 변수와  State 의 차이점 : 일반변수에서 변경이 있을 경우, html에 수동으로 변경해줘야함, state는 html에서 재랜더링(자동으로 반영)된다. 

function App() {

  let post = '강남 우동 맛집';
  let [글제목, b] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']); // 자주 변경될것 같은 html부분은 state로 만들어놓기
  let [따봉, 따봉변경] = useState(0); // 페이지안에서 자주바뀌는 것들은 state로 만들어주면 좋다.  // 따봉변경=> state변경용 함수,이걸써야 재랜더링잘됨
  // 따봉변경(State변경함수)는 새로 대체될 state의 값을 괄호에 넣어줘야 실행된다. 
  let [제목, 제목변경] = useState(글제목[0]) 
  // let num = [1,2]
  // let [a, c] = num[1,2]  destructuring 변수생성문법

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4 onClick={ ()=> { 제목변경(글제목[0]='여자 코트 추천') } }>{ 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉+1) }}>👍</span> {따봉}</h4>
        <p>2월 17일 발행</p>  
      </div>
    
      <div className="list">
        <h4>{ 글제목[1] }</h4> 
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4> 
        <p>2월 17일 발행</p>
      </div>

      <Modal></Modal>
      {/* 컴포넌트로 쓰기 좋은 예시 
      1, 반복적인 html 축약할때
      2, 큰페이지들
      3, 자주변경되는 것들     */}

    </div>
  );
}


function Modal( ){
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )

}

export default App;
