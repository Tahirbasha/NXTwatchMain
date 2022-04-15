import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import ToggleTheme from '../../context/ToggleTheme'
import Header from '../Header'
import SideNav from '../SideNav'
import LoaderComponent from '../Loader'
import FetchError from '../FailureView'

import {
  HomeContainer,
  BottomContainer,
  HomeVideoContainer,
  Heading,
  ViewandBtnContainer,
  ViewContainer,
  BtnContainer,
} from './styledComponents'

class VideoDetails extends Component {
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
    const {match} = this.props
    const {params} = match
    const {id} = params
    try {
      const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
      const data = await response.json()
      console.log(response.ok, 'daffaad')
      console.log(data)
      if (response.ok) {
        const temp = data.video_details
        const UpdatedData = {
          id: temp.id,
          name: temp.channel.name,
          profileImg: temp.channel.profile_image_url,
          subscriberCount: temp.channel.subscriber_count,
          publishedTime: temp.published_at,
          thumbnailUrl: temp.thumbnail_url,
          title: temp.title,
          viewCount: temp.view_count,
          description: temp.description,
          Url: temp.video_url,
        }
        this.setState({isLoading: false, VideosList: UpdatedData})
      }
    } catch {
      console.log('fetch failed')
      this.setState({fetchFailed: true, isLoading: false})
    }
  }

  render() {
    const {isLoading, fetchFailed, VideosList} = this.state
    console.log(VideosList)
    const {
      //   name,
      //   profileImg,
      //   subscriberCount,
      publishedTime,
      //   thumbnailUrl,
      title,
      viewCount,
      //   description,
      Url,
    } = VideosList
    // const Time = formatDistanceToNow(new Date(publishedTime))
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
                  {isLoading ? <LoaderComponent /> : null}
                  {fetchFailed && <FetchError fail={this.getVideos} />}
                  <ReactPlayer url={Url} controls />
                  <Heading toggle={isDarkTheme}>{title}</Heading>
                  <ViewandBtnContainer>
                    <ViewContainer toggle={isDarkTheme}>
                      <Heading para toggle={isDarkTheme}>
                        {viewCount}
                      </Heading>
                      {/* <Heading para toggle={isDarkTheme}>
                        {Time}
                      </Heading> */}
                    </ViewContainer>
                    <BtnContainer toggle={isDarkTheme}>buttons</BtnContainer>
                  </ViewandBtnContainer>
                </HomeVideoContainer>
              </BottomContainer>
            </HomeContainer>
          )
        }}
      </ToggleTheme.Consumer>
    )
  }
}

export default VideoDetails
