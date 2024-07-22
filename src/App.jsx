import { path } from "@material-tailwind/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import { AppLayaut } from "./layouts";


export default function Example() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AppLayaut />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

