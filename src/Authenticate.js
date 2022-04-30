
import './App.css';
import styled from "styled-components";
import { useMoralis } from "react-moralis";

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

function Authenticate() {

  const { authenticate, isAuthenticated, user } = useMoralis();

  return (
    <div className="authenticate">
        {(!isAuthenticated? (
          <StyledButton onClick={()=>{authenticate()}}>Connect to a wallet</StyledButton>
        ) : (
          <h1>Welcome {user.get("username")}</h1>
        ))}
    </div>
  );
}

export default Authenticate;
