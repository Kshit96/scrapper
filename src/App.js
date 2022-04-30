import './App.css';
import styled from "styled-components";
import { MoralisProvider } from "react-moralis";
import Authenticate from './Authenticate';

const StyledContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const StyledButton = styled.button`
background-color: #004E89;
color: white;
border-radius: 5px;
border-width: 0px;
font-size: 2rem;
width: fit-content;
padding: 8px 40px;
&:hover {
  background-color: #1A659E;
}
`

const StyledInput = styled.input`
width: 50%;
font-size: 2rem;
border-radius: 5px;
border-width: 1px;
padding: 8px 8px;
margin-bottom: 1rem;
`

function App() {

  const searchForCollection = () => {
    console.log('Searched For NFT Collection Request!');
  }
  
  
  const handleKeyPress = (e)=>{
    var key=e.keyCode || e.which;
     if (key===13){
        searchForCollection();
     }
   }
 

  return (
    <div className="App">
      <MoralisProvider appId="zIHi2SKFlgk4lrdNOOZkkMO0BDcy47sMSISX7Zvi" serverUrl="https://tygdz4zrqpug.usemoralis.com:2053/server">
      <StyledContainer>
        <StyledInput type="text" name="txt" onKeyPress={handleKeyPress} />
        <StyledButton onClick={searchForCollection}>Search</StyledButton>
        <Authenticate/>
      </StyledContainer>
      </MoralisProvider>
    </div>
  );
}

export default App;
