import { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Alert from "../../components/Alert";
import SideMenu, { SideMenuProps } from "../../components/SideMenu";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const PrivateLayout = () => {
  const { user, error, githubAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  const handlerGithubAuth = async (code: string) => {
    const isLogged = await githubAuth(code)
    isLogged && navigate('/admin')

  }

  if (!user) {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const code = urlParams.get("code")
    if (!!code) {
      handlerGithubAuth(code)
      return
    }
  }

  const menu: SideMenuProps = {
    links: [
      {
        label: 'Sobre',
        to: 'about'
      },
      {
        label: 'Habilidades',
        to: 'skills'
      },
      {
        label: 'Projetos',
        to: 'projects'
      },
      {
        label: 'Contato',
        to: 'contact'
      },
    ],
    social: [
      {
        name: "github",
        url: "https://github.com/mckatoo",
        url_icon: "/images/github.svg"
      },
      {
        name: "youtube",
        url: "https://youtube.com/mckatoo",
        url_icon: "/images/youtube.svg"
      },
      {
        name: "linkedin",
        url: "https://linkedin.com/mckatoo",
        url_icon: "/images/linkedin.svg"
      },
    ]
  }

  return !!user
    ? (
      <div className="h-screen flex flex-cols">
        {!!error && <Alert title={error} type={"error"} />}
        <SideMenu {...menu} />
        <div className="h-screen overflow-y-auto">
          <Outlet />
        </div>
      </div>
    )
    : <Navigate to="/login" />
}