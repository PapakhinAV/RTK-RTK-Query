import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos}) => {

	return (
		<ul className='list-group'>
			{todos?.map((todo) => (
				<TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default React.memo(TodoList);
