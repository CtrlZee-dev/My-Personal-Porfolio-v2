import "./App.css";

import { Header } from "./components/Header";
import { User_Profile_Info } from "./components/User_Profile_Info";
import { User_Bio_Info } from "./components/User_Bio_Info";
import { User_Work_Background_Info } from "./components/User_Work_Background_Info";
import { User_Projects } from "./components/User_Projects";

function App() {
  return (
    <>
      <Header></Header>
      <hr />
      <User_Profile_Info></User_Profile_Info>
      <User_Bio_Info></User_Bio_Info>
      <hr />
      <User_Work_Background_Info></User_Work_Background_Info>
      <hr />
      <User_Projects></User_Projects>
    </>
  );
}

export default App;
