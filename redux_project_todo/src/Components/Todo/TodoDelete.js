import React from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { delete_todos } from '../../reducers/todos';

const TodoDelete = ({id}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    
    const onDeleteTodo = () => {
       user.login ?
       dispatch(delete_todos({id})):
       alert('Access is not available unless you are a member.');
    }
    
    return (
        <IoIosCloseCircle onClick={onDeleteTodo} />
    )
}

export default TodoDelete;