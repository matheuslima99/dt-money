import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      padding: 1rem;
      outline: none;
      border: none;
      border-radius: 6px;
      background: ${(props) => props.theme["gray-900"]};

      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }

    button[type="submit"] {
      padding: 1rem 2rem;
      outline: none;
      border: none;
      border-radius: 6px;
      font-weight: 700;
      cursor: pointer;
      margin-top: 1.5rem;
      color: ${(props) => props.theme["white"]};
      background: ${(props) => props.theme["green-500"]};

      &:hover {
        background: ${(props) => props.theme["green-700"]};
        transition: background-color 0.2s;
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  border: none;
  outline: none;
  color: ${(props) => props.theme["gray-500"]};
  background: transparent;
`;
