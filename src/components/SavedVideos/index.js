import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'
import {AiFillFire} from 'react-icons/ai'

import ToggleTheme from '../../context/ToggleTheme'
import Header from '../Header'
import SideNav from '../SideNav'
// import LoaderComponent from '../Loader'
// import FetchError from '../FailureView'

import {
  HomeContainer,
  BottomContainer,
  HomeVideoContainer,
  EachVideoContainer,
  HeaderContainer,
  IconContainer,
  Heading,
  VideoContainer,
  LogoImg,
  ChannelTitle,
  TheoryContainer,
  Title,
  ViewTime,
  ViewsCount,
  Name,
  OopsContainer,
  NFpara,
} from './styledComponents'

class SavedVideos extends Component {
  //   state = {
  //     isLoading: false,
  //     fetchFailed: false,
  //   }

  noSavedVideos = isDarkTheme => (
    <OopsContainer>
      <LogoImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <Name toggle={isDarkTheme}>No saved videos found</Name>
      <Title toggle={isDarkTheme}>
        You can save your videos while watching them.
      </Title>
    </OopsContainer>
  )

  render() {
    // const {isLoading, fetchFailed} = this.state

    const jwt = Cookies.get('jwt_token')
    if (jwt === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <ToggleTheme.Consumer>
        {value => {
          const {isDarkTheme, ChangeTheme, SavedVideoList} = value
          const NotEmpty = SavedVideoList.length > 0
          console.log(SavedVideoList)
          return (
            <HomeContainer data-testid="savedVideos">
              <Header ChangeTheme={ChangeTheme} />
              <BottomContainer>
                <SideNav />
                <HomeVideoContainer toggle={isDarkTheme}>
                  <HeaderContainer toggle={isDarkTheme}>
                    <IconContainer toggle={isDarkTheme}>
                      <AiFillFire style={{color: 'red', fontSize: '30px'}} />
                    </IconContainer>
                    <Heading toggle={isDarkTheme}>Saved Videos</Heading>
                  </HeaderContainer>
                  {NotEmpty ? (
                    <EachVideoContainer>
                      {SavedVideoList.map(each => {
                        console.log(each)

                        const {
                          id,
                          thumbnailUrl,
                          title,
                          viewCount,
                          name,
                          publishedTime,
                        } = each
                        return (
                          <VideoContainer>
                            <Link to={`/videos/${id}`}>
                              <LogoImg src={thumbnailUrl} alt="website logo" />
                              <ChannelTitle>
                                <TheoryContainer>
                                  <Title toggle={isDarkTheme}>{title}</Title>
                                  <NFpara toggle={isDarkTheme}>{name}</NFpara>

                                  <ViewTime>
                                    <ViewsCount toggle={isDarkTheme}>
                                      {viewCount} views . {publishedTime}
                                    </ViewsCount>
                                  </ViewTime>
                                </TheoryContainer>
                              </ChannelTitle>
                            </Link>
                          </VideoContainer>
                        )
                      })}
                    </EachVideoContainer>
                  ) : (
                    this.noSavedVideos(isDarkTheme)
                  )}
                </HomeVideoContainer>
              </BottomContainer>
            </HomeContainer>
          )
        }}
      </ToggleTheme.Consumer>
    )
  }
}

export default SavedVideos
