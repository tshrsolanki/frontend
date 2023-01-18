import "./App.css";

function App() {
  const [name, setname] = useState("noname");
  const fetchData = async () => {
    const data = await fetch("http://3.111.218.168:5000");
    const res = await data.json();
    if (res.id) {
      setname(res.email);
    }
  };
  return (
    <div className="App">
      <button onClick={fetchData}>FETCH</button>
      {name}
    </div>
  );
}

export default App;
