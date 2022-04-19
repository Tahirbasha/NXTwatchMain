import styled from 'styled-components'

export const HomeContainer = styled.nav`
  background-color: ${props => (props.toggle ? '#0f0f0f' : '#f9f9f9')};
  width: 85vw;
`

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  height: 150vh;
`
export const HomeVideoContainer = styled.div`
  background-color: ${props => (props.toggle ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const LogoImg = styled.img.attrs(props => ({
  src: props.src,
}))`
  height: 400px;
  align-self: flex-start;
`
export const EachVideoContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: auto;
  height: 780px;
`

export const HeaderContainer = styled.div`
  background-color: ${props => (props.toggle ? '#212121' : '##cccccc')};
  display: flex;
  align-items: center;
  padding: 40px;
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

export const VideoContainer = styled.li`
  list-style-type: none;
  width: 30%;
  padding-top: 20px;
  margin-left: 20px;
`

export const Title = styled.p`
  color: ${props => (props.toggle ? '#d7dfe9' : '#212121')};
  font-size: 22px;
  font-weight: 500;
  font-family: Roboto;
`

export const TheoryContainer = styled.div`
  //   display: flex;
  //   flex-direction: column;
  //   //   align-items: flex-start;
  //   margin-left: 12px;
`

export const ViewsCount = styled.p`
  color: ${props => (props.toggle ? '#d7dfe9' : '#212121')};
  font-size: 16px;
  font-weight: 500;
  font-family: Roboto;
`

export const ViewTime = styled.div`
  display: flex;
  align-items: center;
`
