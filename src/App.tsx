import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { AdminAbout } from "./pages/Admin/AdminAbout";
import { AdminSkills } from "./pages/Admin/AdminSkills";
import { Contact } from "./pages/Contact";
import { PrivateLayout } from './pages/Layouts/PrivateLayout';
import { PublicLayout } from "./pages/Layouts/PublicLayout";
import { Login } from "./pages/Login";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Route>
        <Route path="/admin" element={<PrivateLayout />}>
          <Route index element={<AdminAbout />} />
          <Route path="about" element={<AdminAbout />} />
          <Route path="skills" element={<AdminSkills />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App
