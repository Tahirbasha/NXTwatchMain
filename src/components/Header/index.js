import {RiMoonFill, RiSunLine} from 'react-icons/ri'
import Cookies from 'js-cookie'

import ToggleTheme from '../../context/ToggleTheme'

import {
  LogoImg,
  HeaderContainer,
  SettingContainer,
  LogOutBtn,
} from './styledComponents'

const Header = props => {
  const {ChangeTheme} = props
  const ChangeMode = () => {
    ChangeTheme()
  }
  return (
    <ToggleTheme.Consumer>
      {value => {
        const LogoList = [
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png',

          'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png',
        ]
        const {isDarkTheme} = value
        console.log(isDarkTheme)
        const RemoveUser = () => {
          const {history} = props
          Cookies.remove('jwt_token')
          history.replace('/login')
        }
        return (
          <HeaderContainer toggle={isDarkTheme}>
            <LogoImg
              src={isDarkTheme ? LogoList[1] : LogoList[0]}
              alt="website logo"
            />
            <SettingContainer>
              {isDarkTheme ? (
                <RiSunLine
                  color="#ffffff"
                  font-size="25px"
                  onClick={ChangeMode}
                />
              ) : (
                <RiMoonFill font-size="25px" onClick={ChangeMode} />
              )}
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
                height="40px"
                width="40px"
              />
              <LogOutBtn
                type="button"
                toggle={isDarkTheme}
                onClick={RemoveUser}
              >
                Logout
              </LogOutBtn>
            </SettingContainer>
          </HeaderContainer>
        )
      }}
    </ToggleTheme.Consumer>
  )
}
export default Header
