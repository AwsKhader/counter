import { useState } from "react"
import Card from 'react-bootstrap/Card'
import Counter from "./Counter"

function StudentCard({ name, id }) {

  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count => count + 1)
  }

  return (
    <Card className="text-center w-100 mx-auto bg-dark text-white ">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>ID: {id}</Card.Text>
        <Card.Text className="fw-bold">
          Count: {count}
        </Card.Text>

        <Counter onIncrement={handleIncrement} />
      </Card.Body>
    </Card>
  )
}

export default StudentCard