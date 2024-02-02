import { RouterProvider } from "react-router-dom";
import { Router } from "@/shared";

export const ContainerRoot = () => {
    return <RouterProvider router={Router} fallbackElement={<>Loading...</>} />;
};
