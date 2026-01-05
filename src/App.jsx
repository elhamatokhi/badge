import './App.css'
import Badge from './components/Badge'
function App() {
  return (
    <div className="courseContainer">
      <h1>Courese Info</h1>
      <Badge label="Course" value="React"> </Badge>
       <Badge label="Week" value={1} />
      <Badge label="Topic" value="Props" />
      <Badge label="Status" value="In Progress" />
    </div>
  )
}

export default App
