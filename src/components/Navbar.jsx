import React from "react";
import "./Navbar.css";
import { FakeData } from "../store/slices/Showdate";
import { Add_items, clearremove, remove_items } from "../store/slices/AddItems";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  let dispatch = useDispatch();
  let select = useSelector((state) => state.users);

  function ADDuser(payload) {
    return dispatch(Add_items(payload));
  }
  function clear(payload) {
    return dispatch(clearremove(payload));
  }
  function remove(id) {
    return dispatch(remove_items(id));
  }
  return (
    <div>
      <h1>this is react toolkit website</h1>
   
      <ul>
        <li>home </li>
        <li>About</li>
        <li>contact </li>
        <li>service </li>
      </ul>
      <hr />
      <div className="btn">
        <h2>list of users:</h2>
        <button onClick={() => ADDuser(FakeData())}>Add User</button>
      </div>
      <div className="show">
        {select.map((val,id) => (
          <p>
            {val} <button onClick={()=>remove(id)}>✖</button>
          </p>
        ))}
      </div>
      <hr />
      <div className="btn1">
        <button onClick={() => clear()}>Clear All</button>
      </div>
    </div>
  );
};

export default Navbar;
