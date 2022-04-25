import styled from 'styled-components'

export const SideContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px;
  width: 18%;
  height: 150vh;
  list-style-type: none;
  background-color: ${props => (props.toggle ? '#0f0f0f' : '#ffffff')};
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 15px;
  color: '#94a3b8';
  :hover {
    color: red;
    background-color: ${props => (props.toggle ? '#94a3b8' : ' #e2e8f0')};
  }
`

export const ItemPara = styled.p`
  color: #475569;
  font-family: roboto;
  font-size: 15px;
  font-weight: 500;
  margin-left: 10px;
`
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const ContactPara = styled.p`
  color: #909090;
  font-size: 19px;
  font-family: Roboto;
  font-weight: 500;
`
export const SocialLogos = styled.div`
  display: flex;
  //   height: 10px;
  //   width: 10px;
  justify-content: space-between;
  margin-right: 10px;
`
export const navList = styled.ul``
