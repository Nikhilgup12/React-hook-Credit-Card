import {useState} from 'react'
import {
  CreditMainContainer,
  CreditCardMainContainer,
  CreditCardContainer,
  CreditCardInputMainContainer,
  CreditCardInputContainer,
  CreditCardHeading,
  CreditCardNumber,
  CreditCardHolderName,
  CreditCardName,
  CreditCardInput,
  CreditCardPayment,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const onCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onCardName = event => {
    setCardName(event.target.value)
  }

  return (
    <>
      <CreditMainContainer>
        <CreditCardMainContainer>
          <CreditCardHeading> CREDIT CARD </CreditCardHeading>
          <CreditCardContainer data-testid="creditCard">
            <CreditCardNumber> {cardNumber} </CreditCardNumber>
            <CreditCardHolderName> Cardholder Name </CreditCardHolderName>
            <CreditCardName> {cardName.toUpperCase()} </CreditCardName>
          </CreditCardContainer>
        </CreditCardMainContainer>
        <CreditCardInputMainContainer>
          <CreditCardInputContainer>
            <CreditCardPayment> Payment Method </CreditCardPayment>
            <CreditCardInput
              type="text"
              placeholder="Card Number"
              onChange={onCardNumber}
            />{' '}
            <br />
            <CreditCardInput
              type="text"
              placeholder="Cardholder Name"
              onChange={onCardName}
            />
          </CreditCardInputContainer>
        </CreditCardInputMainContainer>
      </CreditMainContainer>
    </>
  )
}

export default CreditCard
