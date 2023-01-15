import { useState } from 'react';
import './App.css'

export default function App() {
  const [light, setLight] = useState(true);
  // true = white , false = black
  const [check, setCheck] = useState();
  const checkEvent = () => {
    
  }
  

  return (
    <div className="App">
      <div className='flex'>
        <button className='black'>해</button>
        <ul className='fontOrange'>
          <li className='flexLi'>All</li>
          <li className='flexLi'>Active</li>
          <li className='flexLi'>Completed</li>
        </ul>
      </div>
      <div className='checkList'>
        <input type='checkbox' onClick={checkEvent}/>
        <label>공부하기</label>
        <button className='delete'>삭제</button>
        <br/>
        <input type='checkbox'/>
        <label>강의보기</label>
        <button className='delete'>삭제</button>
      </div>
      <div className='addTodo'>
        <input placeholder='Add Todo'/>
        <button className='orange'>Add</button>
      </div>
    </div>
  );
}

