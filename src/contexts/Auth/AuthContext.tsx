import { createContext } from "react";
import { SignInProps } from "../../types/Auth";
import { User } from "../../types/User";

export type AuthContextType = {
  user: User | null
  error: string | null
  signin: ({ username, email, password }: SignInProps) => Promise<boolean>
  githubAuth: (code: string) => Promise<boolean>
  signout: () => void
}

export const AuthContext = createContext<AuthContextType>(null!)