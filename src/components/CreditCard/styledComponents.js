import styled from 'styled-components'

export const CreditMainContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
height:100vh;

// padding:20px;
`

export const CreditCardMainContainer = styled.div`
background-image:linear-gradient(to bottom, #3b4b69,#344e7a);
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
padding:40px;
height:100vh;
`

export const CreditCardContainer = styled.div`
background-image:url("https://assets.ccbp.in/frontend/hooks/credit-card-bg.png");
height:400px;
width:100%;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
padding:20px;
text-align:center;
`

export const CreditCardInputMainContainer = styled.div`
background-color:#ffffff;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:40px;
height:100vh;
`

export const CreditCardInputContainer = styled.div`
width:100%;
max-width:400px;
padding:30px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
text-align:center;

box-shadow:0px 4px 16px 0px #c3cad9;
`
export const CreditCardHeading = styled.h1`
color:#ffffff;
font-family:Roboto;
font-weight:bold;
padding-bottom:10px;
border-bottom:3px solid #ffd773;

`
export const CreditCardNumber = styled.h1`
color:#ffffff;
font-family:Roboto;
font-weight:bold;

`
export const CreditCardHolderName = styled.p`
color:#d3d9e0;
font-family:Roboto;
`
export const CreditCardName = styled.p`
color:#ffffff;
font-family:Roboto;
`
export const CreditCardInput = styled.input`
width:100%;
padding:10px 10px 10px 10px;
border:2px solid #d3d9e0;
border-radius:5px;
outline:none;
color:#475569;
font-family:Roboto;
`
export const CreditCardPayment = styled.h1`
color:#344e7a;
font-size:20px;
padding-bottom:20px;
`
