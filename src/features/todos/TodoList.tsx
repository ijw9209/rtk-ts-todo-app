import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

// meterial Ui
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import List from '@mui/material/List';
import { addTodo } from './todoSlice';
import { AppDispatch, RootState } from '../../app/store';

// css modules import
import styles from './TodoList.module.css';

// todoItem 컴포넌트 추가
import TodoItem from './TodoItem';

function TodoList() {
  const todoList = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch<AppDispatch>();

  // console.log(dispatch);

  const [txt, setTxt] = useState('');
  return (
    <CssBaseline>
      <Container fixed>
        <Box sx={{ height: '100vh' }}>
          <h1 className={styles.center}>Todo List</h1>
          <div className={styles.center}>
            <TextField
              type="text"
              onChange={(e) => setTxt(e.target.value)}
              id="standard-basic"
              label="todo Input"
              variant="standard"
              value={txt}
            />
            <Button
              style={{ marginTop: '10px', marginLeft: '10px' }}
              variant="outlined"
              onClick={(e) => {
                dispatch(addTodo(txt));
                setTxt('');
                console.log(e);
              }}
            >
              추가
            </Button>
          </div>
          <div className={styles.center}>
            <h3>할일 내용</h3>
            <List
              dense
              sx={{
                margin: '0 auto',
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
              }}
            >
              {todoList.map((item) => (
                <TodoItem todo={item} />
              ))}
            </List>
          </div>
        </Box>
      </Container>
    </CssBaseline>
  );
}

export default TodoList;
