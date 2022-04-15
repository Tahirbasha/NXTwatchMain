import styled from 'styled-components'

export const HomeContainer = styled.div``

export const BottomContainer = styled.div`
  display: flex;
  width: 100vw;
`
export const HomeVideoContainer = styled.div`
  background-color: ${props => (props.toggle ? '#212121' : '#f4f4f4')};
  width: 85vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 18px;
`
export const Heading = styled.h1`
  color: ${props => (props.toggle ? '#f4f4f4' : '#212121')};
  font-family: roboto;
  font-size: ${props => (props.para ? '15px' : '25px')};
  font-weight: 500;
`
export const ViewandBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ViewContainer = styled.div`
  display: flex;
  align-items: center;
`
export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
