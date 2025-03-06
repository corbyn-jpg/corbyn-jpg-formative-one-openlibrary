function App() {
  return (
    <div className="App" style={{ minHeight: "100vh", backgroundColor: "#f0f0f0", padding: "20px" }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/races" element={<Races />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/spells" element={<Spells />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
