import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div style={{ border: "1px solid blue", padding: "16px" }}>
      <h1>Component App (Рівень 1)</h1>
      <p>Компонент не керує станом. Всі дані надходять з Redux.</p>

      <UserProfile />
    </div>
  );
}

export default App;
