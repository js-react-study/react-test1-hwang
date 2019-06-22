import React from 'react';
import Customer from './components/Customer'; 
import './App.css';
 
const mandatas = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '이영한',
  'birthday': '860403',
  'gender': '남자',
  'job': '프로그래머'
},{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '김미정',
  'birthday': '540403',
  'gender': '여자',
  'job': '디자이너'
},{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '정우리',
  'birthday': '850403',
  'gender': '남자',
  'job': '청소부'
}]  

function App() {
  return (
    <div>
      {
        mandatas.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
        })

      }
    </div>    
  );
}

export default App;
