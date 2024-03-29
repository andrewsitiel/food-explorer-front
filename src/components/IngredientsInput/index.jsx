import { FiX, FiPlus } from "react-icons/fi";
import { Container } from "./styles";

export function IngredientsInput({ IsNew, Title, onClick, ...rest }) {

  const Icon = IsNew ? <FiPlus /> : <FiX />;

  function handleInputAtEnter(event) {
    if (IsNew && event.code === "Enter") {
      const inputButton = document.querySelector("main div > :not(input[readonly]) + button")
      inputButton.click();
    }
  }

  return (
    <Container IsNew={IsNew}>

      <input
        type="text"
        placeholder="Adicionar"
        value={Title && Title}
        onKeyDown={(e) => { handleInputAtEnter(e) }}
        readOnly={!IsNew}
        {...rest}
      />

      <button onClick={onClick}>
        {Icon}
      </button>

    </ Container>
  )
}