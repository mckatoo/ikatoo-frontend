import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Alert from "./components/Alert";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { PublicLayout } from "./PublicLayout";
import api from "./services/api";

function App() {
  const [error, setError] = useState('');
  const [user, setUser] = useState({});

  const githubAuth = async (code: string) => {
    try {
      const { data } = await api.post('auth/github', { code })
      setUser(data)
    } catch (error) {
      if (error instanceof Error)
        setError(error.message)
    }
  }

  useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const code = urlParams.get("code")
    !!code && githubAuth(code)
  }, []);

  return (
    <>
      {!!error && <Alert title={error} type={"error"} />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<About />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
