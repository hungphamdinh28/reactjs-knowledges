import ComponentA from "./components/ComponentB";
import ComponentB from "./components/ComponentA";
import Mouse from "./components/Mouse";

function App() {
  return (
    <div className="App" style={{ position: 'relative', width: 800, height: 800, border: '1px solid #000' }}>
      <Mouse render={({ x, y }) => (<ComponentA  x={x} y={y} />)} />
      <Mouse render={({ x, y }) => (<ComponentB  x={x} y={y} />)} />
    </div>
  );
}

export default App;
