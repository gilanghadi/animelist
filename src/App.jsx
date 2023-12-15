import "./App.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import RouteApp from "./routes";

function App() {
  return (
    <>
      <SpeedInsights />
      <RouteApp />
    </>
  );
}

export default App;
