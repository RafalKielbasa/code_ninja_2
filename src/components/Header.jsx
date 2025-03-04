import styled from "styled-components";
import Button from "@mui/material/Button";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
  background-color: red;
`;

export const Header = ({ handleFormVisibility, isFormVisible }) => {
  return (
    <StyledHeader>
      <h1>Christmas Wish List</h1>
      <Button onClick={handleFormVisibility}>
        {isFormVisible ? "Ukryj formularz" : "Pokaż formularz"}
      </Button>
    </StyledHeader>
  );
};
