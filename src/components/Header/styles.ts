import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
  background: ${(props) => props.theme['gray-900']};
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
  height: 3.125rem;
  padding: 0.75rem 1.25rem;
  border-radius: 6px;
  border: none;
  font-weight: 700;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['green-500']};

  &:hover {
    background: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`
