import React from 'react';

import { useDispatch } from 'react-redux';

import { ListItem } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { deleteTodo } from './todoSlice';
import { AppDispatch } from '../../app/store';

import styles from './TodoItem.module.css';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}
function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Card className={styles.card} style={{ marginTop: '20px' }}>
      <CardContent>
        <ListItem
          style={{ justifyContent: 'space-between' }}
          disableGutters
          key={todo.id}
          // dispatch 추가
          onClick={() => {
            dispatch(deleteTodo(todo.id));
          }}
        >
          {todo.text}{' '}
          <DeleteOutlineIcon style={{ float: 'right', cursor: 'pointer' }} />
        </ListItem>
      </CardContent>
    </Card>
  );
}

export default TodoItem;
