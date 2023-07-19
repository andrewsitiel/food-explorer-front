import { Container } from "./styles";
import { api } from "../../services/api";
import { useOrder } from "../../hooks/orderHook";
import { formatPrice } from "../../utils/formatPrice";

export function OrderList({ order }) {
  const { removeItem } = useOrder();

  return (
    <Container>
      {order.map((item, index) => (
        <li key={index}>
          <img src={`${api.defaults.baseURL}/files/${item.image}`} alt={`Foto de um ${item.name}`} />
          <div>

            <div>
              <h4>{item.amount}{" X  "} {item.name}</h4>
              <span>
                {formatPrice(item.price)}
              </span>
            </div>

            <button onClick={() => removeItem(item.id)}>Excluir</button>
          </div>
        </li>
      )
      )}
    </Container>
  )
}