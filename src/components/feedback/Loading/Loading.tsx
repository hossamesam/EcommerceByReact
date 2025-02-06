import { TLoading } from "@typesTs/eCommerceTypes";
import Lottie from "lottie-react";
import LoadingFormPage from "@assets/lottieFiles/LoadingFormPage.json";

type LoadingProps = {
    loading?: TLoading;
    error?: null | string;
    children?: React.JSX.Element;
};

const Loading = ({ loading, error, children }: LoadingProps) => {
    if (loading === "pending") {
        return <Lottie animationData={LoadingFormPage} />;
    }
    if (loading === "failed") {
        return <div>{error}</div>;
    }
    return <div>{children}</div>;
};

export default Loading;