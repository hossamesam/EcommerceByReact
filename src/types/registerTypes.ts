import * as z from "zod";


export const signupSchema = z.object({
    email: z.string().min(1, { message: "required" }).email({ message: 'not vaild email' }),
    login: z.string().min(1, { message: "username must be at least 2 characters" }),
    firstName: z.string().min(1, { message: "firstName must be at least 2 characters" }),
    lastName: z.string().min(1, { message: "lastName must be at least 2 characters" }),
    password: z.string().min(8, { message: "password must be at least 8 characters and strong (small and capital ,number characters)" }).max(20, { message: 'mixmum caracters is 20' })
        .refine(
            (value) => /^(?!.*(.)\ {1,})(?=(.*[\d]){1,})(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?:[\da-zA-Z\^@#$%!]){8,20}$/gm.test(value ?? "ok"), { message: "password must be strong" }),
})

export type TFormData = z.infer<typeof signupSchema>