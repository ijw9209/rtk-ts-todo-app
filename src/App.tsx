import React,{ useState } from 'react';
import { AppDispatch, RootState } from './app/store'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from './features/todos/todoSlice';


function App() {
  const todoList = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch<AppDispatch>()

  console.log(dispatch)

  let [ txt , setTxt ] = useState('');

  return (
    <>
      <h1>할일 관리</h1>

      <div>
        <input 
        type="text"
        onChange={(e) => setTxt(e.target.value)}
        ></input>
        <button
          onClick={() => {
            dispatch(addTodo(txt));
          }}
        >추가</button>
      </div>

      <div>
        <h3>할일 내용</h3>
        <>
        {todoList.map((item) =>(
          <p key={item.id}>{item.text}</p>
        ))}          
        </>        

        

      </div>
    </>
  );
}

export default App;
