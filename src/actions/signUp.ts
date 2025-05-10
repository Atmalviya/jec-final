'use server'
import bcrypt from 'bcryptjs'
import { SignUpSchema } from "@/schemas";
import { db } from '@/lib/db';
import { getUserByEmail, getUserByUsername } from '@/utils/user';
import { generateVerificationToken } from '@/lib/tokens';
import { sendVerificationEmail } from '@/lib/mail';


export const signUp = async (values)=> {
    const validatedFields = SignUpSchema.safeParse(values)
    if(!validatedFields.success){
        return { message : "Invalid fields", type: "error" }
    }
    const { firstName, lastName, email, userName, password } = validatedFields.data
    const existingUser1 = await getUserByEmail(email)
    const existingUser2 = await getUserByUsername(userName)

    if(existingUser1){
        return { message : "Email already exists", type: "error" }
    }
    if(existingUser2){
        return { message : "Username already exists", type: "error" }
    }
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await db.user.create({
        data: { 
            firstName, 
            lastName, 
            email, 
            userName, 
            password: hashedPassword,
            role: "USER",
            image: "",
            linkedin: "",
            resume: "",
        }
    });

    const verificationToken = await generateVerificationToken(email)
    // TODO: send verification email
    await sendVerificationEmail(verificationToken.email, verificationToken.token)
    

    return { message : "Confirmaion email sent!", type: "success"}
}