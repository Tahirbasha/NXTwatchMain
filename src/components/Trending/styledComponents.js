import styled from 'styled-components'

export const HomeContainer = styled.nav`
  background-color: ${props => (props.toggle ? '#0f0f0f' : '#f9f9f9')};
  width: 85vw;
`
export const BottomContainer = styled.div`
  display: flex;
  //   width: 82%;
`
export const HomeVideoContainer = styled.div`
  background-color: ${props => (props.toggle ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  //   border: 2px solid yellow;
  display: flex;
  flex-direction: column;
`

export const EachVideoContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow-y: scroll;
  height: 752px;
`

export const HeaderContainer = styled.div`
  background-color: ${props => (props.toggle ? '#212121' : ' #ebebeb')};
  display: flex;
  align-items: center;
  padding: 40px;
  width: 100%;
`

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.toggle ? '#424242' : '#94a3b8')};
  border-radius: 80px;
  padding: 40px;
`

export const Heading = styled.h1`
  color: ${props => (props.toggle ? '#ffffff' : '#000000')};
  margin-left: 10px;
`
