import React, { useEffect, useState } from 'react'
import { Autocomplete, Box, Button, Checkbox, Divider, TextField, Typography } from '@mui/material'
import { MuiColorInput } from 'mui-color-input'
import axios from 'axios'
import { useAppSelector } from '@redux/hooks'



function Addcolor() {
    const { accessToken } = useAppSelector(state => state.authSlice)
    const [colorValue, setColorValue] = React.useState('#ffffff');
    const [suggestedName, setSuggestedName] = React.useState('');
    const [colorOptions, setColorOptions] = React.useState<{ group: string; name: string; hex: string; rgb: string; theme: string }[]>([]);
    const [ValueColorName, setValueColorName] = React.useState("#ffffff");
    const [autocomplete, setautocomplete] = useState(false)
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


    const handleClick = (event: any) => {
        const formData = Object.fromEntries(event.entries()) as {
            name: string;
            code: string;
        };
        axios
            .post(`${import.meta.env.VITE_BaseUrl}/api/colors`, formData, {
                headers: { "Authorization": `Bearer ${accessToken}` },
            })
            .then((response) => {
                console.log('Color added successfully:', response);
            })
            .catch((error) => {
                console.error('Error adding color:', error);
            });
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
        <>
            <form

                onSubmit={handleClick}
                className="flex flex-col gap-4 lg:mx-24 xl:mx-64 mt-16 bg-gray-100 border-2 border-gray-500 rounded-lg p-2 ml-10 mb-5"
            >
                <Typography variant="h4">اضافة لون جديد</Typography>
                <Divider />

                <Box className="flex flex-row gap-12">
                    <Box className="flex flex-col w-40">
                        <Typography variant="h5">اختار اللون</Typography>
                        <MuiColorInput
                            name="code"
                            format="hex"
                            value={colorValue}
                            onChange={handleColorChange}
                        />
                    </Box>
                    <Box className="flex flex-col w-1/3">
                        <Typography variant="h5">اسم اللون</Typography>
                        <Autocomplete
                            freeSolo
                            options={colorOptions.map((option) => option.name)}
                            value={suggestedName}
                            onChange={(_, value: any) => setValueColorName(value)}

                            renderInput={(params) => (
                                <TextField
                                    onChange={(value: any) => setValueColorName(value)}
                                    name="name"
                                    {...params}
                                    variant="outlined"
                                    fullWidth
                                />
                            )}
                        />
                    </Box>
                    <Box className="flex justify-center items-center  mt-[30px] gap-1">
                        <Checkbox onChange={(e) => { setautocomplete(e.target.checked) }} />
                        <label htmlFor="Auto" className='text-xl font-medium '> الملئ التلقائي بالاسم</label>
                    </Box>
                </Box>

                <Button
                    type="submit" variant="contained" className="w-24 text-lg">
                    اضافة
                </Button>
            </form>
        </>
    );
}


export default Addcolor

