import React, { useState } from 'react';
import {useAddTodoMutation} from '../redux/todoApi';
import {with_RTK_Query} from "../toggler";
import {useDispatch} from "react-redux";
import {addTodoAsync} from "../redux/todoSlice";


const AddTodoForm = () => {
	const [value, setValue] = useState('');
	const [addTodo, value1] = useAddTodoMutation()
	const dispatch = useDispatch()
	console.log('value', value1)
	const onSubmit = (event) => {
		event.preventDefault();

		if(with_RTK_Query){
			// with_RTK_Query
			if (value) {
				addTodo({title: value})
			};
		}else{
			// with_Redux_Toolkit + AsyncThunk
			if (value) dispatch( addTodoAsync( { title: value } ) );
		}
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
		</form>
	);
};

export default AddTodoForm;
