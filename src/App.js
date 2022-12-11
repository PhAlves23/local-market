import MainRoutes from "./routes/MainRoutes";
import "./styles/main.scss";
import UserProvider from "./context/UserContext";
function App() {
  return (
    <>
      <UserProvider>
        <MainRoutes />
      </UserProvider>
    </>
  );
}

export default App;
