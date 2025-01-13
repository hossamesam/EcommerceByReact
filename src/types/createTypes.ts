import * as z from "zod";


export const createTypes = z.object({
    barcode: z.string(),
    nameAr: z.string(),
    nameTranslate: z.object({ en: z.string() }),
    description: z.string(),
    descriptionTranslate: z.object({ en: z.string() }),
    sellPrice: z.string(),
    colors: z.any()
    //     .or(
    //     z.array(z.object({
    //         label: z.string(),
    //         value: z.object({
    //             code: z.string(),
    //             id: z.string(),
    //             name: z.string(),
    //         })
    //     }))
    // )
    ,
    category: z.any(),

    sizes: z.any(),
    policies: z.any(),
    attachments: z.any(),
    // category: z.object({ id: z.string() }),
    // z.optional(z.string()),

    // z.object({
    //     code: z.string(),
    //     id: z.string(),
    //     name: z.string(),
    // })
})


export type Tcreate = z.infer<typeof createTypes>