import styled from 'styled-components';

const App = styled.div`
  text-align: center;
  padding-top: 50px;
`;

const Button = styled.div`
  padding: 5px 10px 5px;
  margin-left: 3px;
  margin-right: 3px;
  text-decoration: none;
  border: black solid 1px;
  user-select: none;
  display: inline-block;
  outline: none;
`;

const Title = styled.h1`
  letter-spacing: 8px
`;

const Image = styled.img`
  height: 30vh;
  transform: ${props => `rotate(${props.angle}deg)`}
`;

export {
  Button,
  Title,
  App,
  Image
};
