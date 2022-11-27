import styled, { css } from "styled-components";

interface SummaryCardContainerProps {
  variant?: string;
}

export const SummaryCardContainer = styled.div<SummaryCardContainerProps>`
  padding: 1.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme["gray-600"]};

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  span {
    color: ${(props) => props.theme["gray-300"]};
  }

  strong {
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === "green" &&
    css`
      background: ${props.theme["green-700"]};
    `}
`;

export const SummaryCardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
