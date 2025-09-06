import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAsync } from "../redux/userSlice";

const UserEditForm = () => {
  const dispatch = useDispatch();
  const { user, status, error } = useSelector((state) => ({
    user: state.user,
    status: state.user.status,
    error: state.user.error,
  }));

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAsync({ name, email }));
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
      <button
        type="submit"
        style={{ marginTop: "16px" }}
        disabled={status === "loading"}
      >
        {status === "loading" ? "Оновлення..." : "Оновити дані"}
      </button>
      {status === "failed" && (
        <p style={{ color: "red", marginTop: "8px" }}>Помилка: {error}</p>
      )}
    </form>
  );
};

export default UserEditForm;
