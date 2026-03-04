import Button from 'react-bootstrap/Button'

function Counter({ onIncrement }) {
  return (
    <Button variant="primary" className="mb-3" onClick={onIncrement}>
      Increase Count
    </Button>
  )
}

export default Counter