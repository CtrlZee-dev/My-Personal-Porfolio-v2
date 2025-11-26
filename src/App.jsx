import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { User_Profile_Info } from "./components/User_Profile_Info";
import { User_Bio_Info } from "./components/User_Bio_Info";
import { User_Work_Background_Info } from "./components/User_Work_Background_Info";
import { User_Projects } from "./components/User_Projects";
import { View_Project } from "./components/View_Project";

export default function App() {
  return (
    <>
      <Header />
      <hr />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <User_Profile_Info />

              <User_Bio_Info />
              <hr />
              <User_Work_Background_Info />
              <hr />
              <User_Projects />
            </>
          }
        />

        {/* PROJECT DETAIL PAGE */}
        <Route path="/project/:id" element={<View_Project />} />
      </Routes>
    </>
  );
}
