import React, { useState } from "react";
// import Popup from 'reactjs-popup';
import "reactjs-popup/dist/index.css";
import "./AddTodo.css";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be empty");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="container">
      <form
        className="container bg-white rounded my-3 text-center"
        onSubmit={submit}
      >
        <h3 className="text-black pt-3 font-weight-bold">
          <u>Add to Todo</u>
        </h3>
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label font-weight-bold"
          >
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control bg-dark text-white"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label font-weight-bold">
            Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control bg-dark text-white"
            id="desc"
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline-success font-weight-bold mb-2"
        >
          Add
        </button>
      </form>
    </div>
  );
};

// Using Popup

// export const AddTodo = () => (
//     <div className="container">
//     <div className="container-btn">
//      <Popup trigger={<div className="container"><div className="vertical-center"><button className="btn btn-outline-success text-white"> Add</button></div></div>} position="bottom center">
//       <div classNameName="container">
//             <form className="container bg-white rounded my-3 text-center">
//                 <h3 className="text-black font-weight-bold">Add to Todo</h3>
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputEmail1" className="form-label font-weight-bold">Title</label>
//                     <input type="text" className="form-control bg-dark text-white" id="title" aria-describedby="emailHelp"/>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="desc" className="form-label font-weight-bold">Description</label>
//                     <input type="text" className="form-control bg-dark text-white" id="desc"/>
//                 </div>
//                 <button type="submit" className="btn btn-primary mb-2">Submit</button>
//             </form>
//         </div>
//      </Popup>
//     </div>
//     </div>
//   );
