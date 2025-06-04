import { z } from "zod";

export const logInSchema = z.object({
  email: z.string().email({message: 'invalid email'}),
  password: z.string().min(8, {message: 'password must be atleast 8 characters'})
})