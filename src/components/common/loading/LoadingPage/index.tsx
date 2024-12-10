import React, { ReactNode } from 'react'
import style from './style.module.css'
import { TLoading } from '@typesTs/eCommerceTypes';
type LoadingProps = {
    status: TLoading;
    error?: null | string;
    children: React.ReactNode;

};
function LoadingPage({ status, error, children }: LoadingProps) {
    if (status === "pending" || status === "idle") {
        return (
            <div className={style.container} >
                <span className={style.loader} />
            </div>
        )
    }
    if (status === "failed") {
        return <div>لا يوجد منتجات</div>;
    }
    return <div>{children}</div>;

}

export default LoadingPage
