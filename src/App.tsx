import './App.css'
import Profile from "./components/Profile"

const data = {
  profiles: [
    { name: "John Doe", age: 30, hobby: "Gooning" },
    { name: "Jane Smith", age: 25, hobby: "Reading" },
    { name: "Alice Johnson", age: 28, hobby: "Hiking" }
  ]
}

function App() {
  return (
    <div className="App">
      <div className="board">
        <h1>Profiles</h1>
        {data.profiles.map((profile, index) => (
          <Profile key={index} {...profile} />
        ))}
      </div>
    </div>
  )
}

export default App