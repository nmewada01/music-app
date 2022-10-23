import { Heading } from "@chakra-ui/react";
import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";

function App() {
  return (
    <div className="AHeadingpp">
      <Heading size="2xl" mb="1rem">Music App</Heading>
      <AllRoutes />
    </div>
  );
}

export default App;
