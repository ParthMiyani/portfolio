import Cursor from "./Cursor";
import "../../styles/ui/background.css";
import Header from "../views/Header";
import Home from "../views/Home";

export default function Background() {
  return (
    <div className="background">
      <Cursor />
      <div className="content">
        <Header name="Parth Miyani" />
        <Home />
      </div>
    </div>
  );
}
