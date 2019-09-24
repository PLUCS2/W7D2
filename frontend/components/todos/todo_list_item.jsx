import React from 'react';

export const TodoItem = ({todo}) => {
  let li = (
    <li className="todo" key={todo.id}>
      <p>{todo.title}</p>
      <p>{todo.body}</p>
    </li>
  );
  return li;
};
