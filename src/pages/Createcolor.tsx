import React, { useEffect, useState } from 'react'
import { Autocomplete, Box, Button, Checkbox, Divider, FormControl, FormLabel, TextField, Typography } from '@mui/material'
import { MuiColorInput } from 'mui-color-input'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { toast, Toaster } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createcolorsTypes, TcreatecolorsTypes } from '@typesTs/createTypes'
import { actcreatecolorSlice } from '@redux/createcolor/createcolor'
import { withTranslation } from 'react-i18next'



function Createcolor({ t }: any) {
    const [colorValue, setColorValue] = React.useState('#ffffff');
    const [suggestedName, setSuggestedName] = React.useState('');
    const [colorOptions, setColorOptions] = React.useState<{ group: string; name: string; hex: string; rgb: string; theme: string }[]>([]);
    const [ValueColorName, setValueColorName] = React.useState("#ffffff");
    const [autocomplete, setautocomplete] = useState(false);
    const dispatch = useAppDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isDirty, isValid }
    } = useForm<TcreatecolorsTypes>({
        mode: 'onChange',
        resolver: zodResolver(createcolorsTypes)
    })



    useEffect(() => {
        axios
            .get(`https://www.csscolorsapi.com/api/colors`)
            .then((response) => {
                setColorOptions(response.data.colors);

            })
            .catch((error) => {
                console.error('Failed to fetch color options:', error);
            });
    }, []);

    useEffect(() => {
        if (autocomplete) {
            const colorHex = colorOptions.filter(e => e.name == ValueColorName)
            setColorValue("#" + colorHex[0]?.hex)
        }
    }, [ValueColorName])

    const handleClick = ({ name, code }: { name: string, code: string }) => {
        dispatch(actcreatecolorSlice({ name: suggestedName, code }))
            .then(() => {
                return toast.success(t('toast.success'))
            })
            .catch(() => {
                return toast.error(t('toast.error'))
            })
    };

    const handleColorChange = (newColorValue: any) => {
        setColorValue(newColorValue);
        ;
        const hexNumber = newColorValue.replace('#', '');

        axios
            .get(`https://www.thecolorapi.com/id?hex=${hexNumber}`)
            .then((response) => {
                setSuggestedName(response.data.name.value);
            })
            .catch((error) => {
                console.error('Error fetching color name:', error);
            });
    };
    
    return (
        <div className="flex  justify-center items-center">
            <form
                onSubmit={handleSubmit(handleClick)}
                className="flex my-4 w-[80%] xl:scale-90 flex-col gap-4  bg-gray-100 border-2 border-gray-500 rounded-lg p-4 "
            >
                <Typography variant="h4">اضافة لون جديد</Typography>
                <Divider />

                <Box className="flex flex-row gap-12">
                    <Box className="flex flex-col w-40">
                        <Typography variant="h5">اختار اللون</Typography>
                        <MuiColorInput
                            {...register("code")}
                            format="hex"
                            value={colorValue}
                            onChange={handleColorChange}
                        />
                    </Box>
                    <Box className="flex flex-col w-1/3">
                        <Typography variant="h5">اسم اللون</Typography>
                        <Autocomplete
                            freeSolo
                            {...register("name")}
                            options={colorOptions.map((option) => option.name)}
                            value={suggestedName}
                            onChange={(_, value: any) => setValueColorName(value)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    onChange={(value: any) => setValueColorName(value)}
                                    variant="outlined"
                                    fullWidth
                                />
                            )}
                        />
                    </Box>
                    <Box className="flex justify-center items-center  mt-[30px] gap-1">
                        <Checkbox onChange={(e) => { setautocomplete(e.target.checked) }} />
                        <FormLabel className='text-xl font-medium '> الملئ التلقائي </FormLabel>
                    </Box>
                </Box>

                <Button
                    type="submit" variant="contained" className="w-24 text-lg">
                    اضافة
                </Button>
            </form>
            <Toaster
                duration={5000}
                gap={35}
                richColors
                closeButton
                position={'bottom-right'}
            />
        </div>
    );
}



export default withTranslation()(Createcolor)