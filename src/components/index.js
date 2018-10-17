import { Box, Button as ButtonRaw, Flex } from 'rebass';
import styled, { createGlobalStyle } from 'styled-components';
import { Github as GithubRaw, Linkedin as LinkedinRaw } from 'styled-icons/fa-brands';

export const Button = styled(ButtonRaw)`
  background-color: ${props => props.theme.colors.primaryDark};
  cursor: pointer;
  transition: background-color .2s ease;
  
  :hover {
   background-color: ${props => props.theme.colors.primaryLight};
  }
`;

export const Github = styled(GithubRaw)`
  color: ${props => props.theme.colors.text};
  transition: opacity .2s ease;

  &:hover {
    opacity: .5;
  }
`;

export const GlobalStyle = createGlobalStyle`
  html {
    background-image: linear-gradient(
      to top,
      ${props => props.theme.colors.primaryLight} 0%,
      ${props => props.theme.colors.primaryDark} 100%
    );
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }
`;

export const Layout = styled(Flex)`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

export const LinkedIn = styled(LinkedinRaw)`
  color: ${props => props.theme.colors.text};
  transition: opacity .2s ease;

  &:hover {
    opacity: .5;
  }
`;

export const Panel = styled(Box)`
  background-color: ${props => props.theme.colors.background};
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, .2), 0 8px 8px rgba(0, 0, 0, .2);
  max-width: calc(100vw - 16px);
  width: 512px;
`;
