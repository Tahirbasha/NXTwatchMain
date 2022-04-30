import styled from 'styled-components'

export const VideoContainer = styled.li`
  list-style-type: none;
  width: 28%;
  margin: 20px;
`

export const LogoImg = styled.img.attrs(props => ({
  src: props.src,
}))`
  height: ${props => (props.ImProfilePic ? '40px' : '170px')};
  width: ${props => (props.ImProfilePic ? null : '300px')};
  margin-top: ${props => (props.ImProfilePic ? '18px' : null)};
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

export const Title = styled.p`
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
  font-size: 10px;
  font-weight: 500;
  font-family: Roboto;
`

export const PublishTime = styled.p`
  color: ${props => (props.toggle ? '#d7dfe9' : '#212121')};
  font-size: 12px;
  font-weight: 500;
  font-family: Roboto;
  margin-left: 12px;
`
export const ViewTime = styled.div`
  display: flex;
  align-items: center;
`
