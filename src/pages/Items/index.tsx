import Pagination from "@components/Pagination";
import useGetProduct from "@hooks/ProductHook/useGetProduct";
import { ChevronDown, ChevronUp, ChevronsUpDown, CircleFadingArrowUp, Search, SquarePlus, Trash2 } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { actGetProducts, PaginationCountList, SetPaginationCountList } from "@redux/products/productsSlice";
import { promise } from "zod";
const { tabletd, tableHeader, trHeader, tableHeaderbody, resize, tableStyle, actionstyle } = style

type TOrder = { key: string | null, direction: string | null }

const Items = () => {
    const [sizeItems, setsizeItems] = useState(5);
    let { loading, error, Data, PaginationCount } = useGetProduct({})

    const [orders, setOrders] = useState(Data);

    const dispatch = useAppDispatch()
    const PaginationCountList2 = useAppSelector(PaginationCountList)


    useEffect(() => {
        setOrders(Data)
    }, [Data])




    const [sortConfig, setSortConfig] = useState<TOrder>({ key: null, direction: null });
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
        if (sortConfig.key !== columnName) return <ChevronsUpDown />;
        console.log("columnName", sortConfig);
        if (sortConfig.direction === "ascending") return <ChevronUp />;
        return <ChevronDown className="inline" />;
    };


    const filteredOrders = orders.filter((order) => {
        const matchesSearch = Object.values(order)
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchesStatus =
            statusFilter === "All" || order.id === statusFilter;
        return matchesSearch && matchesStatus;
    });
    const changecount = async (e: any) => {

        await dispatch(SetPaginationCountList(Number(e.target.value)))
        return (
            window.document.location.replace("/items/1/0")
        )

    }

    return (
        <div dir="rtl" className="p-6 mx-auto ">
            <div className="mb-6 flex  items-start md:items-center gap-4">

                <Link
                    to={"/items/CreateProduct"}
                    className="flex px-1 h-[40px] justify-center items-center gap-2 text-sm bg-[green] text-[var(--textHeader)]  border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <span><SquarePlus /></span>
                    <label>add product</label>
                </Link>
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform  -translate-y-1/2 text-[var(--textHeader)]" />
                    <input
                        type="text"
                        placeholder="Search orders..."
                        className="w-full  h-[40px] pl-10 bg-[var(--header)] placeholder:text-[var(--textHeader)] text-[var(--textHeader)] pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <select
                    className="px-4 h-[40px] bg-[var(--header)] text-[var(--textHeader)]    border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => {
                        changecount(e)
                    }}
                >
                    <option >اختار العدد</option>
                    <option id="1" value={5}>اظهار 5 منتجات</option>
                    <option id="2" value={10}>اظهار 10 منتجات</option>
                    <option id="3" value={20}>اظهار 20 منتجات</option>
                    <option id="4" value={30}>اظهار 30 منتجات</option>
                    <option id="5" value={50}>اظهار 50 منتجات </option>
                </select>
                <select
                    className="px-4 h-[40px] bg-[var(--header)] text-[var(--textHeader)]    border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={statusFilter}
                    onClick={(e) =>
                        setStatusFilter(e.target.value)
                    }
                >
                    <option value="All">All Status</option>
                    <option value="catagory">catagory</option>
                    <option value="barcode">barcode</option>
                    <option value="id">id </option>
                </select>
            </div>

            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className={tableStyle}
                    // "w-full table-auto"
                    role="grid" aria-label="Orders table">
                    <thead>
                        <tr className={trHeader + " " + resize}>
                            <th
                                className={tableHeaderbody}
                                onClick={() => sortData("action")}
                                role="columnheader"
                                aria-sort={sortConfig.key === "id" ? sortConfig.direction : "none"}
                            >
                                <div>action </div>
                            </th>
                            {/* New */}
                            <th
                                className={tableHeaderbody}
                                onClick={() => sortData("policies")}
                                role="policies"
                                aria-sort={sortConfig.key === "id" ? sortConfig.direction : "none"}
                            >
                                <div>policies {getSortIcon("policies")} </div>
                            </th>
                            <th
                                className={tableHeaderbody}
                                onClick={() => sortData("sellPrice")}
                                role="sell Price"
                                aria-sort={sortConfig.key === "id" ? sortConfig.direction : "none"}
                            >
                                <div>sell Price {getSortIcon("sellPrice")} </div>
                            </th>

                            <th
                                className={tableHeaderbody}
                                onClick={() => sortData("nameAr")}
                                role="columnheader"
                                aria-sort={sortConfig.key === "catagory" ? sortConfig.direction : "none"}
                            >
                                <div>catagory {getSortIcon("nameAr")} </div>
                            </th>
                            <th
                                className={tableHeaderbody}
                                onClick={() => sortData("description")}
                                role="columnheader"
                                aria-sort={sortConfig.key === "id" ? sortConfig.direction : "none"}
                            >
                                <div>Product Details {getSortIcon("description")} </div>
                            </th>
                            <th
                                className={tableHeaderbody}
                                onClick={() => sortData("barcode")}
                                role="columnheader"
                                aria-sort={sortConfig.key === "barcode" ? sortConfig.direction : "none"}
                            >
                                <div>barcode {getSortIcon("barcode")} </div>
                            </th>
                            <th
                                className={tableHeaderbody}
                                onClick={() => sortData("id")}
                                role="columnheader"
                                aria-sort={sortConfig.key === "status" ? sortConfig.direction : "none"}
                            >
                                <div>id {getSortIcon("id")} </div>
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
                                <td className={tabletd}>
                                    <button
                                        className={actionstyle}
                                        onClick={() => alert(`are you sure you want delet  ${order.id}`)}
                                    > <Trash2 color="red" size={20} />
                                        <span>Delet</span>
                                    </button>
                                    <button
                                        className={actionstyle}
                                        onClick={() => alert(`are you sure you want update  ${order.id}`)}
                                    >
                                        <CircleFadingArrowUp color="orange" size={20} />
                                        <span>update</span>
                                    </button>
                                </td>
                                <td className={tabletd}>{order.policies?.map((e: any) => e.name.ar)}</td>
                                <td className={tabletd}>{order.sellPrice}</td>
                                <td className={tabletd}>{order.nameAr}</td>
                                <td className={tabletd}>{order.description}</td>
                                <td className={tabletd}>
                                    <div>
                                        {order.barcode}
                                    </div>
                                </td>
                                <td className={tabletd}>
                                    <div>
                                        {order.id}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center items-center  w-full my-20 ">
                <Pagination PaginationCount={PaginationCount} routs={`Categories/`} />
            </div>
        </div >
    );
};

export default Items;
