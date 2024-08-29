import { createGlobalStyle } from 'styled-components';

// default breakpoints
// {
//   smallPhone: 320;
//   phone: 375;
//   tablet: 768;
//   desktop: 1024;
//   largeDesktop: 1440;
// }

export const GlobalStyle = createGlobalStyle`

.next-light-theme {
  --background: 251,251,253;
  --secondBackground: 255,255,255;
  --text: 10,18,30;
  --textSecondary: 255,255,255;
  --primary: 22,115,255; 
  --secondary: 10,18,30;
  --tertiary: 231,241,251;
  --cardBackground: linear-gradient(135deg, rgba(173, 216, 230, 1) 0%, rgba(240, 248, 255, 1) 100%);
  --cardShine : radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(9, 89, 180, 0.1), transparent); 
  --inputBackground: 255,255,255;
  --navbarBackground: 255,255,255;
  --modalBackground: 251,251,253;
  --errorColor: 207,34,46;
  --logoColor: #243A5A;
}

.next-dark-theme {
  --background: 26,32,44;
  --secondBackground: 45,55,72;
  --text: 237,237,238;
  --textSecondary: 255,255,255;
  --primary: 22,115,255; 
  --secondary: 10,18,30;
  --tertiary: 231,241,251;
  --cardBackground: rgb(45,55,72);
  --cardShine : radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255, 255, 255, 0.1), transparent); 

  --inputBackground: 45,55,72;
  --navbarBackground: 45,55,72;
  --modalBackground: 26,32,44;
  --errorColor: 207,34,46;
  --logoColor: #fff;
}

:root {
  --font: 'Poppins', sans-serif;
  --shadow-md: 0 6px 8px -2px rgba(12, 0, 46, 0.2), 0 4px 6px -2px rgba(12, 0, 46, 0.1);
  --shadow-lg: 0 12px 17px -4px rgba(12, 0, 46, 0.2), 0 6px 8px -3px rgba(12, 0, 46, 0.1);
  --z-sticky: 7777;
  --z-navbar: 8888;
  --z-drawer: 9999;
  --z-modal: 9999;
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}


/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
} 

html {
  -webkit-font-smoothing: antialiased;
  touch-action: manipulation;
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  font-size: 62.5%;

  @media (max-width: 37.5em) {
    font-size: 50%;
  }

  @media (max-width: 48.0625em) {
    font-size: 55%;
  }

  @media (max-width: 56.25em) {
    font-size: 60%;
  }
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: var(--font);
  color: rgb(var(--text));
  background: rgb(var(--background));
  font-feature-settings: "kern";
}

svg {
  color: rgb(var(--text));
}
/* scrollbar */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(255, 255, 255, 0.3);
}


html {
    scroll-behavior: smooth;
  }

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

}`;
