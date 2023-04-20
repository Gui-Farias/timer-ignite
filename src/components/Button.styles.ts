import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonProps {
  variant: ButtonVariant
}

// const ButtonVariants = {
//   primary: 'purple',
//   secondary: 'orange',
//   danger: 'red',
//   success: 'green',
// }

export const ButtonContainer = styled.button<ButtonProps>`
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 8px;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
`
