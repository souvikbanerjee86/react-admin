import React from "react";
import "./newUser.css";
const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUseForm">
        <div className="newUseritem">
          <label>Username</label>
          <input type="text" placeholder="John" />
        </div>

        <div className="newUseritem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>

        <div className="newUseritem">
          <label>Email</label>
          <input type="email" placeholder="John@email.com" />
        </div>

        <div className="newUseritem">
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>

        <div className="newUseritem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>

        <div className="newUseritem">
          <label>Address</label>
          <input type="text" placeholder="NEW YORK | USA" />
        </div>

        <div className="newUseritem">
          <div className="newUserGender">
            <label>Gender</label>
            <input type="radio" name="male" value="male" id="male" />
            <label for="male">Male</label>
            <input type="radio" name="female" value="female" id="female" />
            <label for="female">Female</label>
          </div>
        </div>
        <div className="newUseritem">
          <label>Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
