import i18next from 'i18next'
import React from 'react'

function ClonePage() {
    return (
        <div className='bg-[var(--bgClone)] border-2 border-zinc-700 rounded-xl '>
            <div className={"text-[var(--textHeaderClone)] bg-[var(--headerClone)] flex justify-center items-center flex-col  w-60 h-8 animate-pulse rounded-xl mb-2 2"
            }>
                header
            </div>

            <div className="flex flex-col bg-neutral-200 w-60 h-64  rounded-xl p-4 gap-4">

                <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md" />
                <div style={{ color: "var(--textColorClone)", fontFamily: "var(--fontClone)", animation: "none" }} dir={i18next.dir()}>الخط المستخدم يمكن تغييره</div>
                <div className="flex flex-col gap-2">
                    <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md" />
                    <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md" />
                    <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md" />
                </div>
            </div>
            <div className={"text-[var(--textHeaderClone)] bg-[var(--headerClone)] flex justify-center items-center flex-col  w-60 h-8 animate-pulse rounded-xl mt-2 "}>
                footer
            </div>

        </div>
    )
}

export default ClonePage
