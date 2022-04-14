import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {RiGamepadFill, RiPlayListAddFill} from 'react-icons/ri'
import ToggleTheme from '../../context/ToggleTheme'

import {
  SideContainer,
  UlContaner,
  ListItem,
  ItemPara,
  FooterContainer,
  ContactPara,
  SocialLogos,
} from './styledComponents'

const SideNav = () => (
  <ToggleTheme.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <SideContainer toggle={isDarkTheme}>
          <UlContaner>
            <ListItem toggle={isDarkTheme}>
              <AiFillHome />
              <ItemPara>Home</ItemPara>
            </ListItem>
            <ListItem toggle={isDarkTheme}>
              <AiFillFire />
              <ItemPara>Trending</ItemPara>
            </ListItem>
            <ListItem toggle={isDarkTheme}>
              <RiGamepadFill />
              <ItemPara>Gaming</ItemPara>
            </ListItem>
            <ListItem toggle={isDarkTheme}>
              <RiPlayListAddFill />
              <ItemPara>Saved videos</ItemPara>
            </ListItem>
          </UlContaner>
          <FooterContainer>
            <ContactPara>CONTACT US</ContactPara>
            <SocialLogos>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
                height="50px"
                width="50px"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
                height="50px"
                width="50px"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
                height="50px"
                width="50px"
              />
            </SocialLogos>
            <ContactPara>
              Enjoy! Now to see your channels and recommendations!
            </ContactPara>
          </FooterContainer>
        </SideContainer>
      )
    }}
  </ToggleTheme.Consumer>
)

export default SideNav
