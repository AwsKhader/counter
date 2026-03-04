import Carousel from 'react-bootstrap/Carousel'
import StudentCard from "./StudentCard"

function App() {

  return (
    <div className="container mt-5 bg-dark w-50" >

      <Carousel >

        <Carousel.Item>
          <StudentCard name="Aws Khader" id="2023001" />
        </Carousel.Item>

        <Carousel.Item>
          <StudentCard name="Ali Ahmad" id="2023002" />
        </Carousel.Item>

        <Carousel.Item>
          <StudentCard name="Sara Mohammed" id="2023003" />
        </Carousel.Item>

      </Carousel>

    </div>
  )
}

export default App