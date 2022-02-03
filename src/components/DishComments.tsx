import ListGroup from 'react-bootstrap/ListGroup'
import { IPasta } from '../types/PastaObject'

interface Props {
  selectedDish: IPasta | null
}

const DishComments = ({ selectedDish }: Props) => (
  <ListGroup>
    {selectedDish ? (
      selectedDish.comments.map((c) => (
        <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
      ))
    ) : (
      <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>
    )}
  </ListGroup>
)

export default DishComments
