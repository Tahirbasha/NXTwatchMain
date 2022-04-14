import {Component} from 'react'
import {BsX} from 'react-icons/bs'

import ToggleTheme from '../../context/ToggleTheme'
import Header from '../Header'
import SideNav from '../SideNav'

import {
  HomeContainer,
  BottomContainer,
  HomeVideoContainer,
  BannerContainer,
  ContentContainer,
  GetBtn,
  LogoImg,
  AdvertLine,
  CancelBtn,
} from './styledComponents'

class Home extends Component {
  state = {showBanner: true}

  CancelBanner = () => {
    this.setState({showBanner: false})
  }

  render() {
    const {showBanner} = this.state

    const LogoList = [
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png',

      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png',
    ]
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
                  <BannerContainer CancelBanner={showBanner}>
                    <ContentContainer>
                      <LogoImg src={LogoList[0]} alt="website logo" />
                      <AdvertLine>
                        Buy NXT Watch Premium prepaid plans with UPI
                      </AdvertLine>
                      <GetBtn>GET IT NOW</GetBtn>
                    </ContentContainer>
                    <CancelBtn>
                      <BsX onClick={this.CancelBanner} />
                    </CancelBtn>
                  </BannerContainer>
                </HomeVideoContainer>
              </BottomContainer>
            </HomeContainer>
          )
        }}
      </ToggleTheme.Consumer>
    )
  }
}

export default Home
