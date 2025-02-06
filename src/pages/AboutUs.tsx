import React from 'react'
import { Toaster, toast } from 'sonner';


import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { Table } from '@table-library/react-table-library/table';

function Aboutus() {
    toast('My toast', {
        className: 'my-classname',
        description: 'My description',
        duration: 5000,
    });
    const data = {
        nodes: [
            { id: '1', name: 'John Doe', age: 28 },
            { id: '2', name: 'Jane Smith', age: 34 },
        ],
    };

    const theme = useTheme(getTheme());

    const columns = [
        { label: 'ID', renderCell: (item) => item.id },
        { label: 'Name', renderCell: (item) => item.name },
        { label: 'Age', renderCell: (item) => item.age },
    ];

    return (
        <div>

            <Toaster />
            <button onClick={() => toast.info('My first toast')}>Give me a toast</button>
            <Table data={data} columns={columns} />
        </div >
    )
}

export default Aboutus
