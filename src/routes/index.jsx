import { Routes, Route } from "react-router-dom";
import PageValidada from "../pages/end";

import Main from "../pages/main";

const RoutsMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/end" element={<PageValidada />} />
      </Routes>
    </>
  );
};
export default RoutsMain;
