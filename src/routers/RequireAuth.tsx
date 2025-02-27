import { Navigate, useLocation } from "react-router-dom";
import { IsAuth } from "../api";

interface Props {
    children: React.ReactNode;
}

const RequireAuth = ({children} : Props) => {
    const location = useLocation();

    if (IsAuth()) {
        return <Navigate to="/Selected_Works" state={{open: true, from: location}}/>
    }

    return children
}

export {RequireAuth}