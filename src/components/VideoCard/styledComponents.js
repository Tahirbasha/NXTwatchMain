import styled from 'styled-components'

export const VideoContainer = styled.div`
  width: 20%;
  margin-left: 20px;
`

export const LogoImg = styled.img.attrs(props => ({
  src: props.src,
}))`
  height: ${props => (props.ImProfilePic ? '40px' : '200px')};
`
export const ChannelTitle = styled.div`
  display: flex;
`

export const Name = styled.p`
  color: ${props => (props.toggle ? '#d7dfe9' : '#212121')};
  font-size: 18px;
  font-weight: 500;
  font-family: Roboto;
`

export const Title = styled.h1`
  color: ${props => (props.toggle ? '#d7dfe9' : '#212121')};
  font-size: 16px;
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
  font-size: 8px;
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
