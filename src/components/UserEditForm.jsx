import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/userSlice";

const UserEditForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ name, email }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ border: "1px solid red", padding: "16px", marginTop: "16px" }}
    >
      <h4>Component UserEditForm (Рівень 3)</h4>
      <div>
        <label>
          Ім'я:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div style={{ marginTop: "8px" }}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <button type="submit" style={{ marginTop: "16px" }}>
        Оновити дані
      </button>
    </form>
  );
};

export default UserEditForm;
