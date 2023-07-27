import { useState } from "react";

interface Value {
  title: string;
  content: string;
  id: number;
  isDone: boolean;
}

const initialValue = { title: "", content: "", id: 1, isDone: false };

export const App = () => {
  const [value, setValue] = useState<Value>(initialValue);
  const [todoList, setTodoList] = useState<Value[]>([]);

  const onSubmit = (event: any) => {
    event.preventDefault();
    const todoId =
      todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1;
    setTodoList([...todoList, { ...value, id: todoId }]);
    setValue(initialValue);
  };

  const onChange = (event: any) =>
    setValue({ ...value, [event.target.name]: event.target.value });

  const deleteHandler = (id: number) =>
    setTodoList(todoList.filter((todo) => todo.id !== id));

  const modifyHandler = (id: number) => {
    const editData = todoList.map((todo) => {
      return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
    });
    setTodoList([...editData]);
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name={"title"} onChange={onChange} />
        <input type="text" name={"content"} onChange={onChange} />
        <button>작성하기</button>
      </form>
      <main>
        <p>Ing..</p>
        <ul>
          {todoList
            .filter((todo) => todo.isDone === false)
            .map((todo) => {
              return (
                <li key={todo.id}>
                  <p>{todo.title}</p>
                  <p>{todo.content}</p>
                  <button onClick={() => deleteHandler(todo.id)}>삭제</button>
                  <button onClick={() => modifyHandler(todo.id)}>완료</button>
                </li>
              );
            })}
        </ul>
        <p>Done..</p>
        <ul>
          {todoList
            .filter((todo) => todo.isDone === true)
            .map((todo) => {
              return (
                <li key={todo.id}>
                  <p>{todo.title}</p>
                  <p>{todo.content}</p>
                  <button onClick={() => deleteHandler(todo.id)}>삭제</button>
                  <button onClick={() => modifyHandler(todo.id)}>취소</button>
                </li>
              );
            })}
        </ul>
      </main>
    </div>
  );
};
