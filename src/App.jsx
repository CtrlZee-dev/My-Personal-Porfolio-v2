import "./App.css";

import { Header } from "./components/Header";
import { User_Profile_Info } from "./components/User_Profile_Info";
import { User_Bio_Info } from "./components/User_Bio_Info";
function App() {
  return (
    <>
      <Header></Header>
      <hr />
      <User_Profile_Info></User_Profile_Info>
      <User_Bio_Info></User_Bio_Info>
      <hr />
    </>
  );
}

export default App;
