import "./App.css";

import Navbar from "./components/Navbar";
import SignupForm from "./components/SignupForm";
import CoolButton from "./components/CoolButton";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SignupForm />
      <CoolButton isInfo>button 1</CoolButton>
      <CoolButton isSuccess>button 2</CoolButton>
    </div>
  );
}

export default App;
