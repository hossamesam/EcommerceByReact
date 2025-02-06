import { Suspense } from "react";

import LottieHandler from "../LottieHandler/LottieHandler";
import { LoadingInfo } from "@components/common/loading";

const PageSuspenseFallback = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense
            fallback={
                <LoadingInfo status="idle" />
                // <LottieHandler type="loading" message="loading please wait.." />
            }
        >
            {children}
        </Suspense>
    );
};

export default PageSuspenseFallback;