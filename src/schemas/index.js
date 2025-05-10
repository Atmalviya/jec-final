import * as z from 'zod'

export const SignInSchema = z.object({
    password: z.string().min(6, {message: "password is required"}), 
    email: z.string().email({message: "invalid email"}),
})

export const SignUpSchema = z.object({
    password: z.string().min(6, {message: "password is required"}), 
    userName: z.string().regex(/^0201[A-Za-z]{2,3}\d{6}$/, { message: "invalid username format" }),
    email: z.string().email({message: "invalid email"}),
    lastName: z.string().min(3, {  message: "last name must be at least 3 characters"}), 
    firstName: z.string().min(3, {message: "first name must be at least 3 characters"}), 
})

export const ResetSchema = z.object({
    email: z.string().email({message: "invalid email"}),
})

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {message: "Minimum 6 character required"})
})