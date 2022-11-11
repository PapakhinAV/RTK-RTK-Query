import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';
import {useSelector} from "react-redux";
import {useGetTodoQuery} from "./redux/todoApi";
import {with_RTK_Query} from "./toggler";

const App = () => {

	// with_RTK_Query
	const query = useGetTodoQuery()
	console.log('useGetTodoQuery()', query)
	const {data: queryData} = query
	// with_Redux_Toolkit + AsyncThunk
	const toolkitData =  useSelector((state) => state.todos)

	const todos = with_RTK_Query ? queryData : toolkitData;


	return (
		<div className='container bg-white p-4 mt-5'>
			<h1>My Todo List</h1>
			<AddTodoForm />
			<TodoList todos={todos} />
			<TotalCompleteItems todos={todos}/>
		</div>
	);
};

export default App;
