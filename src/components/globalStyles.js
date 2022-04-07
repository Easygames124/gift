import { createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`

body {

background: ${({ theme }) => theme.body};

color: ${({ theme }) => theme.text};

transition: all 0.2s linear;

}
html::-webkit-scrollbar {
    width: 10px;
  }
  
  html::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollTrack};
  }
  
  html::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${({ theme }) => theme.scrollThumb};
  }
`