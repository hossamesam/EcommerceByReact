import { Box, Button, Divider, TextareaAutosize, TextField, Typography } from '@mui/material'
import { useRef } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import UploadImage from '@components/UploadImage/UploadImage';
import { createpolicyTypes, TcreatepolicyTypes } from '@typesTs/createTypes';
import { useAppDispatch } from '@redux/hooks';
import { toast, Toaster } from 'sonner';
import { withTranslation } from 'react-i18next'
import { actcreatepolicySlice } from '@redux/createpolicy/createpolicySlice';

function Createpolicy({ t }: any) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isDirty, isValid }
    } = useForm<TcreatepolicyTypes>({
        mode: 'onChange',
        resolver: zodResolver(createpolicyTypes)
    })
    const ref = useRef<{ guid: string }[] | null>(null)
    const dispatch = useAppDispatch()

    function onSubmit({ name, description, url }: TcreatepolicyTypes) {
        const guid = ref.current

        if (!guid) {
            return toast.error(t('toast.error'))
        }
        dispatch(actcreatepolicySlice({
            name,
            description,
            url,
            guid: guid[0].guid,
        })).then(() => {
            return toast.success(t('toast.success'))
        }).catch(() => {
            return toast.error(t('toast.error'))
        })
    }
    return (
        <div className='flex flex-col items-center my-4 '>
            <Typography variant="h4" > انشاء سياسة جديدة</Typography>
            <form method='post' onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 w-[80%] xl:w-[70%] py-4 px-8 gap-4   border-2 border-gray-500 border-solid rounded-lg '>
                <Box >
                    <Typography variant="h6" >اسم السياسة</Typography>
                    <TextField
                        // onChange={(e) => setNameAr(e.target.value)}
                        {...register("name.ar")}
                        name='name'

                        placeholder={"اسم السياسة"}
                        variant="outlined"
                        fullWidth
                    />
                </Box>

                <Box className='flex flex-col'>
                    <Typography variant="h6" className='text-gray-800'>وصف السياسة</Typography>
                    <TextField
                        multiline
                        {...register("description.ar")}
                    >
                    </TextField>

                    {/* <textarea
                        {...register("description.ar")}
                        id="message" rows={2} className='bg-gray-50 border-2 border-zinc-800/20 p-2'></textarea> */}
                </Box>

                <Box className='flex flex-col col-span-2'>
                    <Typography variant="h6" className='text-gray-800'> اضافة ايكونة</Typography>
                    <UploadImage ref={ref} />
                </Box>

                <Button type='submit' variant='contained' className='w-24 text-lg'>اضافة</Button>
            </form>
            <Toaster
                duration={5000}
                gap={35}
                richColors
                closeButton
                position={'bottom-right'}
            />
        </div>
    )
}
export default withTranslation()(Createpolicy)