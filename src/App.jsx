import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 950px;
  width: 100%;
  margin: 100px auto 0;
  border-radius: 8px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (min-width: 920px) {
    flex-direction: row;
  }

  @media (max-width: 919px) {
    flex-direction: column;
  }
`

const CardBase = styled.div`
  width: 307px;
  padding: 48px;
  color: #fff;

  h2 {
    font-family: 'Big Shoulders';
    margin-top: 35px;
    font-weight: 700;
    font-size: 40px;
    line-height: 100%;
    color: #F2F2F2;
  }

  p {
    margin-top: 35px;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    opacity: 75%;
  }
`

const CardOrange = styled(CardBase)`
  background-color: #E28625;
`

const CardLightGreen = styled(CardBase)`
  background-color: #006971;
`

const CardDarkGreen = styled(CardBase)`
  background-color: #004140;
`

const ButtonBase = styled.button`
  margin-top: 83px;
  padding: 12px 31.5px;
  background-color: #F2F2F2;
  border-radius: 25px;
  border: none;
`

const ButtonOrange = styled(ButtonBase)`
  color: #E28625;
`

const ButtonLightGreen = styled(ButtonBase)`
  color: #006971;
`

const ButtonDarkGreen = styled(ButtonBase)`
  color: #004140;
`

export default function () {
  return (
    <div>
      <Container>
        <Wrapper>
          <CardOrange>
            <img src="public/sedan.svg" alt="Sedans" />
            <h2>SEDANS</h2>
            <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
            <ButtonOrange>Learn More</ButtonOrange>
          </CardOrange>
          <CardLightGreen>
            <img src="public/suv.svg" alt="Suvs" />
            <h2>SUVS</h2>
            <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
            <ButtonLightGreen>Learn More</ButtonLightGreen>
          </CardLightGreen>
          <CardDarkGreen>
            <img src="public/luxury.svg" alt="Luxury" />
            <h2>LUXURY</h2>
            <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. </p>
            <ButtonDarkGreen>Learn More</ButtonDarkGreen>
          </CardDarkGreen>
        </Wrapper>
      </Container>
    </div>
  )
}
