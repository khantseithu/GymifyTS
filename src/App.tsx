import Navbar from "@/scenes/navbar";
import { useState } from "react";

type Props = {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
};

function App() {
  const [selectedPage, setselectedPage] = useState<string>("home"); // ["home", "benefits", "ourclasses", "contactus"]
  return (
    <>
      <div className="app bg-gray-20">
        <Navbar selectedPage={selectedPage} setSelectedPage={setselectedPage} />
      </div>
    </>
  );
}

export default App;
