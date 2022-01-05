import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const list = [
    {
      todo: "Writing",
      complete: false,
    },
    {
      todo: "Playing",
      complete: false,
    },
    {
      todo: "Doing",
      complete: false,
    },
  ];
  const [todoItems, setTodoItem] = useState(list);
  const [todoFilteItems, setTodoFilterItem] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  // console.log(todoItems);

  const [searchedText, setSearchedText] = React.useState("");

  //createtodo
  const createTodoItem = (todo) => {
    // console.log(todo);
    const newTudoList = [...todoItems, { todo, complete: false }];
    setTodoItem(newTudoList);
  };

  //deleting to-do
  const deleteTodo = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItem(newTodoItems);
  };

  //complete to-do

  const completeTodo = (index) => {
    const newUpdate = [...todoItems];
    newUpdate[index].complete === false
      ? (newUpdate[index].complete = true)
      : (newUpdate[index].complete = false);
    setTodoItem(newUpdate);
  };

  //update to-do

  const updateTodo = (index) => {
    const newUpdateTudo = [...todoItems];
    const item = newUpdateTudo[index];
    // console.log("index---", index);
    // console.log("newUpdateTudo---", newUpdateTudo);
    // console.log("item---", item);
    let newItem = prompt(`Updating the ${item.todo} todo item`, item.todo);
    // console.log("newItem---", newItem);

    let todoObj = { todo: newItem, complete: false };
    newUpdateTudo.splice(index, 1, todoObj);
    if (newItem === null || newItem === "") {
      return;
    } else {
      item.todo = newItem;
    }
    setTodoItem(newUpdateTudo);
  };

  // For Search Functionality

  const handleChange = (event) => {
    setSearchedText(event.target.value);
  };

  const handleSearch = () => {
    if (searchedText !== "") {
      const filteredArray = todoItems.filter((item) => {
        return item.todo
          ?.toLocaleLowerCase()
          ?.includes(searchedText?.toLocaleLowerCase());
      });
      setIsSearched(true);
      setTodoFilterItem(filteredArray);
      console.log(filteredArray);
    }
  };

  const reset = () => {
    setIsSearched(false);
    setSearchedText("");
  };

  const data = isSearched ? todoFilteItems : todoItems;

  return (
    <div className="App">
      {/* <div className="header">WELCOME TO THE TODO LIST APP &#128522;</div>
      <br></br>
      <br></br>
      <div className="main_div">
        <input type="text" placeholder="ADD TASK" className="task" />
        <button className="add">ADD</button>
      </div>

      <br></br> */}
      <Header title="WELCOME TO THE TODO LIST APP &#128522;" />

      <TodoInput createTodoItem={createTodoItem} />
      <br></br>
      <br></br>
      <div className="body-container">
        <div className="todo-items">{`Your Total Todo Item for Today is : ${todoItems.length}`}</div>
        <div className="search-bar">
          <TextField
            id="outlined-multiline-flexible"
            label="Search"
            placeholder="Search Todo..."
            value={searchedText}
            onChange={handleChange}
            variant="outlined"
            // fullWidth
            className="my-search"
          />
          <button className="add-task-btn" onClick={handleSearch}>
            Search
          </button>
          {isSearched && (
            <button className="add-task-btn" onClick={reset}>
              Reset
            </button>
          )}
        </div>

        {data && data.length > 0 ? (
          data.map((item, index) => {
            return (
              <TodoItem
                key={index}
                title={item.todo}
                index={index}
                deleteCallback={deleteTodo}
                completeCallback={completeTodo}
                updateCb={updateTodo}
                status={item.complete}
              />
            );
          })
        ) : (
          <div className="todo-items" style={{ marginTop: "25px" }}>
            No Item matches the searched Criteria. Please Re-try.
          </div>
        )}
      </div>
      {/* <Footer title="Copyright © by git hub Abhijeet Kumar year:2021   " /> */}
      <Footer
        title="Copyright © by"
        link=" git hub:- https://github.com/"
        name="Abhijeet kumar"
        year="2021"
      />
    </div>
  );
}

export default App;
