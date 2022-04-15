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
          <Link to={`/videos/${id}`}>
            <VideoContainer>
              <LogoImg src={thumbnailUrl} alt="website logo" />
              <ChannelTitle>
                <LogoImg src={profileImg} ImProfilePic />
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
            </VideoContainer>
          </Link>
        )
      }}
    </ToggleTheme.Consumer>
  )
}

export default withRouter(VideoCard)
