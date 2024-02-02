import { createRoot } from "react-dom/client";
import { ContainerRoot } from "@/app/root/ContainerRoot";
import "./config/mobx";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(<ContainerRoot />);
  