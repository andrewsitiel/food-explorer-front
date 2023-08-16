import { useNavigate } from "react-router-dom";
import { LuPencil } from "react-icons/lu";
import { Container } from "./styles";

export function Pencil({ id }) {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => { navigate(`/edit/${id}`) }}
    >
      {<LuPencil />}
    </Container>
  )
}