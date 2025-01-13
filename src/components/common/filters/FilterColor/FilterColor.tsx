import { useGetcolors } from '@hooks/FiltersHook';


function Filtercolor() {
    const { colors } = useGetcolors()

    return (
        <div >
            <h5 color="initial" style={{ fontWeight: "bolder", justifyContent: "center", alignItems: "center", display: "flex", margin: "10px 0" }}>اللون</h5>
            <div style={{ scrollbarWidth: "thin", scrollbarColor: "rgb(0,0,0) rgb(180,220,255)" }} className="h-48 flex flex-col ml-2 overflow-x-hidden">
                {colors.map((res, index) => {
                    return (
                        <button key={index} className='flex justify-between items-center px-4 hover:bg-[var(--hoverA)]'>
                            <span className='font-bold text-[15px] line-clamp-3' >{res.name}</span>
                            {/* <input type="checkbox" key={res.name} value={res.name} /> */}
                        </button>
                    )
                })}
            </div>

        </div>
    )
}

export default Filtercolor
