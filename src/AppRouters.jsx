import { BrowserRouter } from "react-router-dom";
import GuestRoutes from "./routes";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <GuestRoutes />
        </BrowserRouter>
    );
}

export default AppRouter;