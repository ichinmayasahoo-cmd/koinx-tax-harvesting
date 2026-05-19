import './index.css'

function App() {
  return (
    <div style={{
      background: "#111",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      <h1>KoinX Tax Harvesting Dashboard</h1>

      <div style={{
        background: "#222",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px"
      }}>
        <h2>Capital Gains</h2>
        <p>Short Term: ₹ 45,000</p>
        <p>Long Term: ₹ 80,000</p>
      </div>

      <div style={{
        background: "#222",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px"
      }}>
        <h2>Holdings</h2>
        <ul>
          <li>BTC - Profit ₹20,000</li>
          <li>ETH - Loss ₹10,000</li>
          <li>SOL - Profit ₹15,000</li>
        </ul>
      </div>
    </div>
  )
}

export default App