import React from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { toggle_todos } from '../../reducers/todos';

const TodoToggle = ({id}) => {
    const dispatch = useDispatch();

    const login = useSelector(state => state.user.login);

    const onToggleTodo = () => {
       login?
       dispatch(toggle_todos({ id })):
       alert('Access is not available unless you are a member.');
    }
    
    return (
        <IoIosCheckmarkCircleOutline onClick={onToggleTodo} />
    )
}

export default TodoToggle;
