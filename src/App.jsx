import "./App.scss";
import Card from "./components/Card";
import Info from "./components/Info";

function App() {
  return (
    <main className="main">
      <Info />

      <Card name={"Work"} />
      <Card name={"Play"} />
      <Card name={"Study"} />
      <Card name={"Exercise"} />
      <Card name={"Social"} />
      <Card name={"Self Care"} />
    </main>
  );
}

export default App;
