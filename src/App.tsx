import React,{ useState } from 'react';
import { AppDispatch, RootState } from './app/store'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from './features/todos/todoSlice';

//meterial Ui
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import List from '@mui/material/List';
import { ListItem } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

//css modules import 
import styles from './App.module.css';


function App() {
  const todoList = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch<AppDispatch>()

  console.log(dispatch)

  let [ txt , setTxt ] = useState('');

  return (
    <CssBaseline>
    <Container fixed >
      <Box sx={{height: '100vh'}}> 
      <h1 className={styles.center}>Todo List</h1>
      <div className={styles.center}>
        <TextField 
        type="text"
        onChange={(e) => setTxt(e.target.value)}
        id="standard-basic" label="todo Input" variant="standard"
        ></TextField>
        <Button
          style={{ marginTop : '10px', marginLeft : '10px'}}
          variant="outlined"
          onClick={() => {
            dispatch(addTodo(txt));
          }}
        >추가</Button>
      </div>
      <div className={styles.center}>
        <h3>할일 내용</h3>
        
        <List dense sx={{ margin : '0 auto',width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todoList.map((item) =>(
          <Card style={{marginTop : '20px'}}> 
            <CardContent>
              <ListItem 
              style={{justifyContent : 'space-between'}}
              disableGutters
              key={item.id}>{item.text} < DeleteOutlineIcon  style={{float : 'right'}}/></ListItem>
          </CardContent>
          </Card>
        ))}          
        </List>        
      </div>
      </Box>
    </Container>
    </CssBaseline>
  );
}

export default App;
