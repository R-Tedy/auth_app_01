'use server'

import { logInSchema } from "../validations"

const initialUser = {
  email: 'stedyroland@gamil.com',
  password: '12345678'
}

export async function logIn(
  prevState:any,
  formData: FormData
) {
  const result = logInSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
    errors: result.error.flatten().fieldErrors,
    };
  };

  const {email, password} = result.data;

  if (email !== initialUser.email || password !== initialUser.password) {
    return {
      errors: {
        email: ['invalid email or password']
      }
    }
  }
};