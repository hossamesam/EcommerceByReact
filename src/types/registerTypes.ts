import { useWatch } from "react-hook-form";
import * as z from "zod";


export const signupSchema = z.object({
    email: z.string().min(1, { message: "required" }).email({ message: 'not vaild email' }),
    // login: z.string().min(1, { message: "username must be at least 2 characters" }),
    firstName: z.string().min(1, { message: "firstName must be at least 2 characters" })
        .refine((value) => /\S/s.test(value ?? "ok"), { message: "no spacesss" })
    ,
    lastName: z.string().min(1, { message: "lastName must be at least 2 characters" })
    // .refine((value) => /^[\S]$/.test(value ?? "ok"), { message: "no spaces" })
    ,
    login: z.string().min(1, { message: "login name must be at least 2 characters" })
    // .refine((value) => /^[\S]$/.test(value ?? "ok"), { message: "no spaces" })
    ,
    password: z.string().min(8, { message: "password must be at least 8 characters and strong (small and capital ,number characters)" }).max(20, { message: 'mixmum caracters is 20' })
        .refine(
            (value) => /^(?!.*(.)\ {1,})(?=(.*[\d]){1,})(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?:[\da-zA-Z\^@#$%!]){8,20}$/gm.test(value ?? "ok"), { message: "password must be strong" }),
    password_repeat: z
        .string()
})
    .refine((data) => data.password === data.password_repeat, {
        message: "Passwords don't match",
        path: ["password_repeat"],
    })


export type TFormData = z.infer<typeof signupSchema>