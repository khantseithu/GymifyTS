import Navbar from "@/scenes/navbar";
import { useState } from "react";
import { SelectedPage } from "./shared/types";
// type Props = {
//   selectedPage: string;
//   setSelectedPage: (page: string) => void;
// };

function App() {
  const [selectedPage, setselectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  ); // ["home", "benefits", "ourclasses", "contactus"]
  return (
    <>
      <div className="app bg-gray-20">
        <Navbar selectedPage={selectedPage} setSelectedPage={setselectedPage} />
      </div>
    </>
  );
}

export default App;
