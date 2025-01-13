"use client"
import { Button } from "@mui/material";
import { ChevronDown, ChevronUp, ChevronsUpDown, Download, Search, SortAsc, Upload } from "lucide-react";
import { useState } from "react";

const Items = () => {
    const initialOrders = [
        {
            id: "ORD001",
            customerName: "John Smith",
            productDetails: "iPhone 13 Pro - 256GB",
            orderDate: "2024-01-15",
            status: "Delivered"
        },
        {
            id: "ORD002",
            customerName: "Emma Wilson",
            productDetails: "MacBook Air M1",
            orderDate: "2024-01-16",
            status: "Processing"
        },
        {
            id: "ORD003",
            customerName: "Michael Brown",
            productDetails: "AirPods Pro",
            orderDate: "2024-01-17",
            status: "Shipping"
        },
        {
            id: "ORD004",
            customerName: "Sarah Davis",
            productDetails: "iPad Pro 12.9",
            orderDate: "2024-01-18",
            status: "Delivered"
        },
        {
            id: "ORD005",
            customerName: "James Wilson",
            productDetails: "Apple Watch Series 7",
            orderDate: "2024-01-19",
            status: "Processing"
        }
    ];

    const [orders, setOrders] = useState(initialOrders);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const sortData = (key: string | number) => {
        let direction = "ascending";
        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }


        const sortedOrders = [...orders].sort((a, b) => {
            if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
            if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
            return 0;
        });

        setOrders(sortedOrders);
        setSortConfig({ key, direction });
    };

    const getSortIcon = (columnName: any) => {
        if (sortConfig.key !== columnName) return <ChevronsUpDown className="inline" />;
        console.log("columnName", sortConfig);
        if (sortConfig.direction === "ascending") return <ChevronUp className="inline" />;
        return <ChevronDown className="inline" />;
    };


    const filteredOrders = orders.filter((order) => {
        const matchesSearch = Object.values(order)
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchesStatus =
            statusFilter === "All" || order.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search orders..."
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <select
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="All">All Status</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipping">Shipping</option>
                    <option value="Delivered">Delivered</option>
                </select>
            </div>

            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="w-full table-auto" role="grid" aria-label="Orders table">
                    <thead>
                        <tr className="bg-gray-100">
                            <th
                                className="px-6 py-3 text-left cursor-pointer"
                                onClick={() => sortData("id")}
                                role="columnheader"
                                aria-sort={sortConfig.key === "id" ? sortConfig.direction : "none"}
                            >
                                action {getSortIcon("id")}
                            </th>
                            <th
                                className="px-6 py-3 text-left cursor-pointer"
                                onClick={() => sortData("customerName")}
                                role="columnheader"
                                aria-sort={sortConfig.key === "customerName" ? sortConfig.direction : "none"}
                            >
                                catagory {getSortIcon("customerName")}
                            </th>
                            <th
                                className="px-6 py-3 text-left cursor-pointer"
                                onClick={() => sortData("productDetails")}
                                role="columnheader"
                                aria-sort={sortConfig.key === "productDetails" ? sortConfig.direction : "none"}
                            >
                                Product Details {getSortIcon("productDetails")}
                            </th>
                            <th
                                className="px-6 py-3 text-left cursor-pointer"
                                onClick={() => sortData("orderDate")}
                                role="columnheader"
                                aria-sort={sortConfig.key === "orderDate" ? sortConfig.direction : "none"}
                            >
                                barcode {getSortIcon("orderDate")}
                            </th>
                            <th
                                className="px-6 py-3 text-left cursor-pointer"
                                onClick={() => sortData("status")}
                                role="columnheader"
                                aria-sort={sortConfig.key === "status" ? sortConfig.direction : "none"}
                            >
                                id {getSortIcon("status")}
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                        {filteredOrders.map((order, index) => (
                            <tr
                                key={order.id}
                                className={`${index % 2 === 0 ? "bg-white" : "bg-blue-100"} hover:bg-gray-100 transition-colors duration-200`}
                                role="row"
                            >
                                <td className="px-6 py-4 flex justify-end items-center gap-2">
                                    <button className="bg-red-500"
                                        onClick={() => alert(`are you sure you want delet  ${order.id}`)}
                                    > delet</button>
                                    <button className="bg-yellow-400"> updata</button>
                                </td>
                                <td className="px-6 py-4 text-left">{order.customerName}</td>
                                <td className="px-6 py-4 text-left">{order.productDetails}</td>
                                <td className="px-6 py-4 text-left">{order.id}</td>
                                <td className="px-6 py-4 text-left">{order.id}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Items;