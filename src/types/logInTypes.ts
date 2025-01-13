import * as z from "zod";


export const logInSchema = z.object({
    email: z.string()
        .min(1, { message: "required" })
    // .email({ message: 'not vaild email' })
    ,


    password: z.string().min(5, { message: "password error" }).max(20, { message: 'mixmum caracters is 20' })
    // .refine(
    //     (value) => /^(?!.*(.)\ {1,})(?=(.*[\d]){1,})(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?:[\da-zA-Z\^@#$%!]){8,20}$/gm.test(value ?? "ok"), { message: "password error" }),
    , rememberMe: z.boolean()
})
    .required({ email: true, password: true })


export type TFormDataLogin = z.infer<typeof logInSchema>