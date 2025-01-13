import { ReactNode } from 'react'
import style from './style.module.css'
import { TLoading } from '@typesTs/eCommerceTypes';

const { slide, loader } = style


type LoadingProps = {
    status: TLoading;
    error?: null | string;
    children: React.ReactNode;
};
function LoadingInfo({ status, error, children }: LoadingProps) {
    if (status === "pending" || status === "idle") {
        return <div className="h-screen">
            <div className={loader}></div>
        </div>
    }
    if (status === "failed") {
        return <div>لا يوجد منتجات</div>;
    }
    return <div>{children}</div>;
}



export default LoadingInfo;