import { useState } from "react";
import Trains from "./components/Trains";
import AuthForm from "./components/AuthForm";
import RegForm from "./components/RegForm";
function App() {

  const [token, setToken] = useState(null);

  return (
    <>
      <h1>REACT TRAIN APP</h1>
      <p>Choo Choo!</p>

      {token ? <button onClick={() => setToken(false)}>Sign Out</button> : <AuthForm setToken={setToken} />}

      {token ? <Trains token={token} /> : <RegForm setToken={setToken}/>}
    </>
  );
}

export default App;
