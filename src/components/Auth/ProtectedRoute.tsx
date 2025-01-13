import { useAppSelector } from "@redux/hooks";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { accessToken } = useAppSelector((state) => state.authSlice);

    if (!!accessToken) {
        return <Navigate to="/" />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;