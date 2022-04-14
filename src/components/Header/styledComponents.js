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
export const SettingContainer = styled.button`
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
