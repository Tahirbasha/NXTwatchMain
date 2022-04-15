import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'
import {RiGamepadFill} from 'react-icons/ri'

import ToggleTheme from '../../context/ToggleTheme'
import Header from '../Header'
import SideNav from '../SideNav'
import LoaderComponent from '../Loader'
import FetchError from '../FailureView'

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
} from './styledComponents'

class Gaming extends Component {
  state = {
    isLoading: false,
    fetchFailed: false,
    VideosList: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({isLoading: true})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    try {
      const response = await fetch(
        `https://apis.ccbp.in/videos/gaming`,
        options,
      )
      const data = await response.json()
      if (response.ok) {
        const UpdatedData = data.videos.map(each => ({
          id: each.id,
          thumbnailUrl: each.thumbnail_url,
          title: each.title,
          viewCount: each.view_count,
        }))
        this.setState({isLoading: false, VideosList: UpdatedData})
      }
    } catch {
      console.log('fetch failed')
      this.setState({fetchFailed: true, isLoading: false})
    }
  }

  render() {
    const {isLoading, fetchFailed, VideosList} = this.state

    const jwt = Cookies.get('jwt_token')
    if (jwt === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <ToggleTheme.Consumer>
        {value => {
          const {isDarkTheme, ChangeTheme} = value
          return (
            <HomeContainer>
              <Header ChangeTheme={ChangeTheme} />
              <BottomContainer>
                <SideNav />
                <HomeVideoContainer toggle={isDarkTheme}>
                  <HeaderContainer toggle={isDarkTheme}>
                    <IconContainer toggle={isDarkTheme}>
                      <RiGamepadFill style={{color: 'red', fontSize: '30px'}} />
                    </IconContainer>
                    <Heading toggle={isDarkTheme}>Gaming</Heading>
                  </HeaderContainer>
                  {isLoading ? <LoaderComponent /> : null}
                  {fetchFailed && <FetchError fail={this.getVideos} />}
                  {!fetchFailed && (
                    <EachVideoContainer>
                      {VideosList.map(each => {
                        console.log(each)

                        const {id, thumbnailUrl, title, viewCount} = each
                        return (
                          <Link to={`/videos/${id}`}>
                            <VideoContainer>
                              <LogoImg src={thumbnailUrl} alt="website logo" />
                              <ChannelTitle>
                                <TheoryContainer>
                                  <Title toggle={isDarkTheme}>{title}</Title>

                                  <ViewTime>
                                    <ViewsCount toggle={isDarkTheme}>
                                      {viewCount} Worldwide watching
                                    </ViewsCount>
                                  </ViewTime>
                                </TheoryContainer>
                              </ChannelTitle>
                            </VideoContainer>
                          </Link>
                        )
                      })}
                    </EachVideoContainer>
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

export default Gaming
