import axios from "axios";
import React, {useEffect} from "react";

const Todos = () => {
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
            const responseTodos = res.data;
            setTodos(responseTodos);
        });
    }, []);
    return(
        <p>Hello todos</p>
    )
}

export default Todos;