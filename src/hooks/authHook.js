import { api } from "../services/api";

export function AuthServices() {

  async function createUser ({name, email, password}) {
      return await api.post("/user",{name,email,password})
  }

  return {createUser}
}