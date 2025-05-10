'use server'

import { SignInSchema } from "@/schemas";
import { signIn } from '@/auth'
// import { redirect } from "next/dist/server/api-utils";
import { DEFAULT_LOGIN_REDIRECT_URL } from "@/routes";
import { AuthError } from "next-auth";
import { generateVerificationToken } from "@/lib/tokens";
import { getUserByEmail } from "@/utils/user";
import { sendVerificationEmail } from "@/lib/mail";

interface SignInValues {
    email: string;
    password: string;
}

export const signInAction = async (values: SignInValues)=> {
    const validatedFields = SignInSchema.safeParse(values)
    if(!validatedFields.success){
        return { message : "Invalid fields", type: "error" }
    }

    const { email, password } = validatedFields.data;
    const existingUser = await getUserByEmail(email);
    if(!existingUser || !existingUser.email){
        return { message : "Email doesn't exist", type: "error"}
    }
    if(!existingUser.emailVerified){
        const verificationToken = await generateVerificationToken(existingUser.email)

        await sendVerificationEmail(verificationToken.email, verificationToken.token)
        return { message : "Conformation email sent!", type : "warning"}
    }
    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT_URL
        })
        return { message : "good", type: "error" }
    } catch (error) {
        if(error instanceof AuthError) {
            switch(error.type){
                case "CredentialsSignin" :
                    return { message : "Invalid credentials", type: "error" }
                default:
                    return { message : "An error occurred", type: "error" }
            }
        }
        throw error;
    }

    

    return { message : "Email sent", type: "success"}
}


