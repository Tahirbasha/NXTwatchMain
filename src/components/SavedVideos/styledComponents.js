import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.toggle ? '#0f0f0f' : '#f9f9f9')};
`

export const BottomContainer = styled.div`
  display: flex;
  width: 100vw; ;
`
export const HomeVideoContainer = styled.div`
  background-color: ${props => (props.toggle ? '#212121' : '#f4f4f4')};
  width: 85vw;
  display: flex;
  flex-direction: column;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const GetBtn = styled.button`
  align-self: flex-start;
  background-color: transparent;
  padding: 12px;
`

export const LogoImg = styled.img.attrs(props => ({
  src: props.src,
}))`
  height: 200px;
  align-self: flex-start;
`
//  ${props => (props.maiHuNotFound ? '480px' : '40px')};
export const AdvertLine = styled.p`
  font-size: 28px;
  width: 75%;
`
export const CancelBtn = styled.button`
  background-color: transparent;
  border: 0px;
  align-self: flex-start;
`
export const NFcontainer = styled.div`
  text-align: center;
  margin-top: 18px;
  align-self: center;
  background-color: ${props => (props.toggle ? '#212121' : '#f4f4f4')};
`
export const NFheading = styled.h1`
  color: ${props => (props.toggle ? '#ffffff' : '#212121')};
  font-size: 28px;
`
export const NFpara = styled.p`
  color: ${props => (props.toggle ? '#ffffff' : '#212121')};
  font-size: 18px;
`

export const SearchContainer = styled.div`
  border: 2px solid '#7e858e';
  padding: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: '#cccccc';
  margin-left: 25px;
`

export const SearchBar = styled.input`
  padding: 5px;
  outline: none;
`
export const EachVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: auto;
  height: 780px;
`
export const OopsContainer = styled.div`
  text-align: center;
`

export const RetryBtn = styled.button`
  color: #ffffff;
  font-weight: 500;
  padding: 12px;
  background-color: #4f46e5;
  outline: none;
  border-radius: 8px;
  border: none;
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

export const VideoContainer = styled.div`
  display: flex;
  width: 90%;
  padding-top: 20px;
  margin-left: 20px;
`

export const ChannelTitle = styled.div`
  display: flex;
`

export const Name = styled.p`
  color: ${props => (props.toggle ? '#d7dfe9' : '#212121')};
  font-size: 25px;
  font-weight: 500;
  font-family: Roboto;
`

export const Title = styled.h1`
  color: ${props => (props.toggle ? '#d7dfe9' : '#212121')};
  font-size: 22px;
  font-weight: 500;
  font-family: Roboto;
`

export const TheoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 12px;
`

export const ViewsCount = styled.p`
  color: ${props => (props.toggle ? '#d7dfe9' : '#212121')};
  font-size: 16px;
  font-weight: 500;
  font-family: Roboto;
`

export const PublishTime = styled.p`
  color: ${props => (props.toggle ? '#d7dfe9' : '#212121')};
  font-size: 10px;
  font-weight: 500;
  font-family: Roboto;
  margin-left: 12px;
`
export const ViewTime = styled.div`
  display: flex;
  align-items: center;
`
