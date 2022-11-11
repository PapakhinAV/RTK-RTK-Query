import React from 'react';

const TotalCompleteItems = ({todos: data = []}) => {

	const todos = data?.filter((todo) => todo.completed === true)

	return <h4 className='mt-3'>Total complete items: {todos.length}</h4>;
};

export default React.memo(TotalCompleteItems);
