import {formatDistanceToNow} from 'date-fns'
import {Link, withRouter} from 'react-router-dom'
import ToggleTheme from '../../context/ToggleTheme'

import {
  VideoContainer,
  LogoImg,
  ChannelTitle,
  Name,
  Title,
  TheoryContainer,
  ViewsCount,
  PublishTime,
  ViewTime,
} from './styledComponents'

const VideoCard = props => {
  const {itemDetails} = props
  const {
    id,
    name,
    profileImg,
    publishedTime,
    thumbnailUrl,
    title,
    viewCount,
  } = itemDetails
  return (
    <ToggleTheme.Consumer>
      {value => {
        const {isDarkTheme} = value
        const Time = formatDistanceToNow(new Date(publishedTime))
        return (
          <VideoContainer>
            {' '}
            <Link to={`/videos/${id}`}>
              <LogoImg src={thumbnailUrl} alt="video thumbnail" />
              <ChannelTitle>
                <LogoImg src={profileImg} ImProfilePic alt="channel logo" />
                <TheoryContainer>
                  <Title toggle={isDarkTheme}>{title}</Title>
                  <Name toggle={isDarkTheme}>{name}</Name>
                  <ViewTime>
                    <ViewsCount toggle={isDarkTheme}>
                      {viewCount} views
                    </ViewsCount>
                    <PublishTime toggle={isDarkTheme}>{Time}</PublishTime>
                  </ViewTime>
                </TheoryContainer>
              </ChannelTitle>
            </Link>
          </VideoContainer>
        )
      }}
    </ToggleTheme.Consumer>
  )
}

export default withRouter(VideoCard)
