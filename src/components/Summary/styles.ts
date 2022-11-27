import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: -5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

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

