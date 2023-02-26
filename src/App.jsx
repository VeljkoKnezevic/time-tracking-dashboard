import { useState } from "react";
import "./App.scss";
import Card from "./components/Card";
import Info from "./components/Info";

function App() {
  const [timeframe, setTimeframe] = useState("weekly");

  return (
    <main className="main">
      <Info setTimeframe={setTimeframe} />

      <Card timeframe={timeframe} name={"Work"} />
      <Card timeframe={timeframe} name={"Play"} />
      <Card timeframe={timeframe} name={"Study"} />
      <Card timeframe={timeframe} name={"Exercise"} />
      <Card timeframe={timeframe} name={"Social"} />
      <Card timeframe={timeframe} name={"Self Care"} />
    </main>
  );
}

export default App;
