import { AreaFooter } from './styled';
import styled from 'styled-components';

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 2em;
  font-weight: bold;
  margin: 0.5em 5em;
  margin-top: 10px;
  text-align: left;
  border: 6px solid palevioletred;
  border-radius: 8px;
  botton: 0;
`;

function Footer(){
    return (
        <AreaFooter>
                    <img src="../../../AllRightsReservedBlack.png" alt="logoFooter" />
                    <Button primary>Eloy Bank of America</Button>
        </AreaFooter>
    );
}

export default Footer;