import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    padding: 1rem;
    outline: 0;
    border: none;
    color: ${(props) => props.theme["gray-100"]};
    background: ${(props) => props.theme["gray-900"]};

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    padding: 0.875rem 2rem;
    border-radius: 6px;
    line-height: 0;
    font-weight: 700;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme["green-300"]};
    color: ${(props) => props.theme["green-300"]};
    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      border-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme["white"]};
      background: ${(props) => props.theme["green-500"]};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`;
