import { useContext, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import Alert from '../components/Alert'
import Logo from '../components/Logo'
import { AuthContext } from '../contexts/Auth/AuthContext'
import githubAuth from '../services/github/githubAuth'

export const Login = () => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()

  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async (user: FieldValues) => {
    const { username, email, password } = user
    if ((username || email) && password) {
      const isLogged = await auth.signIn({ username, email, password })
      if (isLogged) {
        navigate('/admin')
      } else {
        setError('error: Credentials invalid')
      }
    }
  }

  return (
    <section className="h-screen w-screen">
      {!!error && <Alert title={error} type="error" />}
      <div className="container w-96 mx-auto px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="text-gray-300">
            <Logo name="Milton Carlos Katoo" description="Software Developer" />
          </div>
          <div className="w-full">
            <form onSubmit={handleSubmit(handleSignIn)} className="flex flex-col gap-6">
              <div className="rounded-md border border-gray-300 p-2 flex flex-col gap-2">
                <input
                  {...register('username')}
                  type="text"
                  className="form-control block w-full px-4 py-2 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Username"
                />

                <div
                  className="flex items-center before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                  <p className="text-center font-semibold text-gray-500 text-xs mx-4 mb-0">OR</p>
                </div>

                <input
                  {...register('email')}
                  type="text"
                  className="form-control block w-full px-4 py-2 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                />
              </div>

              <input
                {...register('password')}
                type="password"
                className="form-control block w-full px-4 py-2 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Password"
              />

              <div className="flex justify-between items-center">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    defaultChecked
                  />

                  <label className="form-check-label inline-block text-gray-400" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <a
                  href="#!"
                  className="text-gray-500 hover:text-gray-400 focus:text-gray-600 active:text-gray-800 duration-200 transition ease-in-out">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="inline-block px-7 py-3 text-mck_aqua bg-slate-800 focus:outline-none hover:bg-mck_aqua hover:text-slate-800 font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Sign in
              </button>

              <div
                className="flex items-center before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
              >
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>

              <button
                type="button"
                className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-stretch mb-3 bg-blue-800"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                onClick={() => githubAuth()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github mr-2" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                Continue with GitHub
              </button>
            </form>
          </div>
        </div>
      </div>
    </section >
  )
}