import React, { useState } from "react";

export const CcompleteTodos = (props) => {
  const { todos } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
