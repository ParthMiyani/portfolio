import Header from "../components/views/Header";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Header name="Parth Miyani" />
      <Outlet />
    </>
  );
}
