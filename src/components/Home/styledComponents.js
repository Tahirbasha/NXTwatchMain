import styled from 'styled-components'

export const HomeContainer = styled.div``

export const BottomContainer = styled.div`
  display: flex;
  flex-grow: 1;
`
export const HomeVideoContainer = styled.div`
  background-color: ${props => (props.toggle ? '#212121' : '#ffffff')};
  width: 85vw;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: ${props => (props.CancelBanner ? 'flex' : 'none')};
  justify-content: space-between;
  padding: 20px;
  height: 40vh;
  width: 85vw;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const GetBtn = styled.button`
  align-self: flex-start;
  background-color: transparent;
  padding: 12px;
`

export const LogoImg = styled.img.attrs(props => ({
  src: props.src,
}))`
  height: 60px;
  align-self: flex-start;
`

export const AdvertLine = styled.p`
  font-size: 28px;
  width: 75%;
`
export const CancelBtn = styled.button`
  background-color: transparent;
  border: 0px;
  align-self: flex-start;
`
