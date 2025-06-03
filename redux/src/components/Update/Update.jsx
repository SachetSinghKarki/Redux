import React, { useState } from "react";
import "./Update.css";
import Warning from "../Warning/Warning";
import { useDispatch, useSelector } from "react-redux";
import { remove, update, greetings } from "../../redux/userSlice";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const user = useSelector((state)=>state.user)
  const dispatch = useDispatch()


  const handleUpdate = (e)=>{

    e.preventDefault()
    dispatch(
      greetings({name,email})
    )
  }

  const handleRemove=(e)=>{
    e.preventDefault()
    dispatch(
      remove()
    )
  }

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3>Update your profile</h3>
        <Warning />
        <button className="delete" onClick={handleRemove}>Delete Account</button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  src="https://img.favpng.com/11/2/24/crayon-shin-chan-shinnosuke-nohara-drawing-donald-duck-animated-film-png-favpng-rnY7fn7nX9h5WVB0bPfxTqsRt.jpg"
                  alt=""
                  className="avatar"
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                type="text"
                className="formInput"
                placeholder={user.name? user.name :"guest"}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="formItem">
              <label>Email</label>
              <input
                type="email"
                className="formInput"
                placeholder ={user.email? user.email :"guest@email.com"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>

            <button className="updateButton" onClick={handleUpdate}>Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
