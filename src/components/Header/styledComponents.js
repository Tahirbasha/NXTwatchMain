import styled from 'styled-components'

export const LogoImg = styled.img.attrs(props => ({
  src: props.src,
}))`
  height: 40px;
`

export const HeaderContainer = styled.nav`
  background-color: ${props => (props.toggle ? '#0f0f0f' : ' #ffffff')};
  display: flex;
  justify-content: space-between;
  padding: 12px;
`
export const SettingContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 18%;
  background-color: transparent;
  border: 0px;
`
export const LogOutBtn = styled.button`
  color: ${props => (props.toggle ? '#ffffff' : '#3b82f6')};
  border: 1px solid ${props => (props.toggle ? '#ffffff' : '#3b82f6')};
  outline: none;
  background-color: transparent;
  padding: 5px;
`
export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 38vh;
  border-radius: 5px;
  border: none;
  background-color: ${props => (props.toggle ? '#0f0f0f' : ' #ffffff')};
`
export const confirmSentence = styled.p`
  color: #00306e;
  font-size: 25px;
  font-family: roboto;
  font-weight: 500;
`

export const CancelBtn = styled.button`
  border: 1px solid #3b82f6;
  padding: 5px;
  color: #3b82f6;
  border-radius: 3px;
  background-color: transparent;
`
export const ConfirmBtn = styled.button`
  border: none;
  padding: 5px;
  color: #ffffff;
  border-radius: 3px;
  background-color: #3b82f6;
`
export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  //   align-self: stretch;
  width: 20%;
`
export const ThemeBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: 0px;
`
