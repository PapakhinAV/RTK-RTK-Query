import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleteAsync, deleteTodoAsync } from '../redux/todoSlice';
import {useDeleteTodoMutation, useToggleCompleteMutation} from "../redux/todoApi";
import {with_RTK_Query} from "../toggler";

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();
	const [toggleComplete] = useToggleCompleteMutation()
	const [deleteTodo] = useDeleteTodoMutation()

	const handleCheckboxClick = () => {
		if(with_RTK_Query){
			// with_RTK_Query
			toggleComplete({ id, completed: !completed })
		}else{
			// with_Redux_Toolkit + AsyncThunk
			dispatch(toggleCompleteAsync({ id, completed: !completed }));
		}
	};

	const handleDeleteClick = () => {
		if(with_RTK_Query){
			// with_RTK_Query
			deleteTodo({ id })
		}else{
			// with_Redux_Toolkit + AsyncThunk
			dispatch(deleteTodoAsync({ id }));
		}
	};

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='mr-3'
						checked={completed}
						onChange={()=>{}}
						onClick={handleCheckboxClick}
					></input>
					{title}
				</span>
				<button onClick={handleDeleteClick} className='btn btn-danger'>
					Delete
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
