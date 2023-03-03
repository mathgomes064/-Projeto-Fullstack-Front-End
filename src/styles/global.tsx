import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Lexend:wght@500;600;700&display=swap");
:root {
  background-color: var( --grey-8);
  overflow-x: hidden;
  /* font-family: 'IBM Plex Mono', monospace;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: white;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%; */

  --brand-1: #4529e6;
  --brand-2: #5126ea;
  --brand-3: #b0a6f0;
  --brand-4: #edeafd;

  --black: #0b0d0d;
  --grey-0: #212529;
  --grey-1: #212529;
  --grey-2: #495057;
  --grey-3: #868e96;
  --grey-4: #adb5bd;
  --grey-5: #ced4da;
  --grey-6: #dee2e6;
  --grey-7: #e9ecef;
  --grey-8: #f1f3f5;
  --grey-9: #f8f9fa;
  --grey-10: #fdfdfd;
  --white: #ffffff;

  --alert-1: #cd2b31;
  --alert-2: #fdd8d8;
  --alert-3: #ffe5e5;

  --sucess-1: #18794e;
  --sucess-2: #ccebd7;
  --sucess-3: #ddf3e4;

  --random-1: #e34d8c;
  --random-2: #c04277;
  --random-3: #7d2a4d;
  --random-4: #7000ff;
  --random-5: #6200e3;
  --random-6: #36007d;
  --random-7: #349974;
  --random-8: #2a7d5f;
  --random-9: #153d2e;
  --random-10: #6100ff;
  --random-11: #5700e3;
  --random-12: #30007d;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* title variable */
#title-1-700 {
  color: var(--grey-0);
  font-family: 'Lexend', sans-serif;
  font-weight: 700;
  font-size: 44px;
}

#title-2-600 {
  color: var(--grey-0);
  font-family: 'Lexend', sans-serif;
  font-weight: 600;
  font-size: 36px;
}

#title-2-500 {
  color: black;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
}

#title-3-600 {
  color: var(--grey-0);
  font-family: 'Lexend', sans-serif;
  font-weight: 600;
  font-size: 32px;
}

#title-3-500 {
  color: var(--grey-0);
  font-family: 'Lexend', sans-serif;
  font-weight: 500;
  font-size: 32px;
}

#title-4-600 {
  color: var(--grey-0);
  font-family: 'Lexend', sans-serif;
  font-weight: 600;
  font-size: 28px;
}

#title-4-500 {
  color: var(--grey-0);
  font-family: 'Lexend', sans-serif;
  font-weight: 500;
  font-size: 28px;
}

#title-5-600 {
  color: var(--grey-0);
  font-family: 'Lexend', sans-serif;
  font-weight: 600;
  font-size: 24px;
}

#title-5-500 {
  color: black;
  font-family: 'Lexend', sans-serif;
  font-weight: 500;
  font-size: 24px;
}

#title-6-600 {
  color: var(--grey-0);
  font-family: 'Lexend', sans-serif;
  font-weight: 600;
  font-size: 20px;
}

#title-6-500 {
  color: var(--grey-0);
  font-family: 'Lexend', sans-serif;
  font-weight: 500;
  font-size: 20px;
}

#title-7-600 {
  color: var(--grey-0);
  font-family: 'Lexend', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

#title-7-500 {
  color: var(--grey-0);
  font-family: 'Lexend', sans-serif;
  font-weight: 500;
  font-size: 16px;
}

/* text variable */

#text-1-400 {
  color: var(--grey-1);
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
}

#text-1-600 {
  color: var(--grey-1);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

#text-2-400 {
  color: var(--grey-2);
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
}

#text-2-500 {
  color: var(--grey-2);
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
}

/* button text variable */

#button-big-text {
  color: var(--grey-1);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

#button-medium-text {
  color: var(--grey-1);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
}

/* input text variable */

#input-placeholder {
  color: var(--grey-1);
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
}

#input-label {
  color: var(--grey-1);
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
}

/* button variable */
#button-black-big {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 146px;
  background-color: var(--black);
  border: 1.5px solid var(--black);
  border-radius: 4px;
  gap: 10px;

  color: var(--white);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

#button-black-medium {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 119px;
  background-color: var(--black);
  border: 1.5px solid var(--black);
  border-radius: 4px;
  gap: 10px;

  color: var(--white);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
}

#button-black-big:hover {
  transition: all 0.4s;
  background-color: var(--white);
  border: 1.5px solid var(--white);
  color: var(--grey-1);
}

#button-black-medium:hover {
  transition: all 0.4s;
  background-color: var(--white);
  border: 1.5px solid var(--white);
  color: var(--grey-1);
}

#button-grey-1-big {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 146px;
  background-color: var(--grey-0);
  border: 1.5px solid var(--grey-0);
  border-radius: 4px;
  gap: 10px;

  color: var(--white);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

#button-grey-1-medium {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 119px;
  background-color: var(--grey-0);
  border: 1.5px solid var(--grey-0);
  border-radius: 4px;
  gap: 10px;

  color: var(--white);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
}

#button-grey-1-big:hover {
  transition: all 0.4s;
  background-color: var(--white);
  border: 1.5px solid var(--black);
  color: var(--black);
}

#button-grey-1-medium:hover {
  transition: all 0.4s;
  background-color: var(--white);
  border: 1.5px solid var(--black);
  color: var(--black);
}

#button-grey-2-big {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 146px;
  background-color: var(--grey-6);
  border: 1.5px solid var(--grey-6);
  border-radius: 4px;
  gap: 10px;

  color: var(--grey-2);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

#button-grey-2-medium {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 119px;
  background-color: var(--grey-6);
  border: 1.5px solid var(--grey-6);
  border-radius: 4px;
  gap: 10px;

  color: var(--grey-2);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
}

#button-grey-2-big:hover {
  transition: all 0.4s;
  background-color: var(--grey-0);
  border: 1.5px solid var(--grey-0);
  color: var(--white);
}

#button-grey-2-medium:hover {
  transition: all 0.4s;
  background-color: var(--grey-0);
  border: 1.5px solid var(--grey-0);
  color: var(--white);
}

#button-grey-3-big {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 146px;
  background-color: var(--grey-5);
  border: 1.6px solid var(--grey-5);
  border-radius: 4px;
  gap: 10px;

  color: var(--grey-2);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

#button-grey-3-medium {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 119px;
  background-color: var(--grey-5);
  border: 1.6px solid var(--grey-5);
  border-radius: 4px;
  gap: 10px;

  color: var(--grey-2);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
}

#button-grey-3-big:hover {
  transition: all 0.4s;
  background-color: var(--white);
  border: 1.6px solid var(--grey-3);
  color: var(--black);
}

#button-grey-3-medium:hover {
  transition: all 0.4s;
  background-color: var(--white);
  border: 1.6px solid var(--grey-3);
  color: var(--black);
}


#button-grey-login-big {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 48px;
  
  background-color: var(--white);
  border: 1.6px solid var(--grey-3);
  border-radius: 4px;
  gap: 10px;

  color: var(--black);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

#button-grey-login-medium {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 119px;
  background-color: var(--grey-5);
  border: 1.6px solid var(--grey-5);
  border-radius: 4px;
  gap: 10px;

  color: var(--grey-2);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
}

#button-grey-login-big:hover {
  transition: all 0.4s;
  background-color: var(--grey-5);
  border: 1.6px solid var(--grey-5);
  color: var(--grey-2);
  
}

#button-grey-login-medium:hover {
  transition: all 0.4s;
  background-color: var(--white);
  border: 1.6px solid var(--grey-3);
  color: var(--black);
}

#button-grey-4-big {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 146px;
  background-color: var(--grey-5);
  border: 1.5px solid var(--grey-5);
  border-radius: 4px;
  gap: 10px;

  color: var(--white);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

#button-grey-4-medium {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 119px;
  background-color: var(--grey-5);
  border: 1.5px solid var(--grey-5);
  border-radius: 4px;
  gap: 10px;

  color: var(--white);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
}

#button-grey-4-big:hover {
  transition: all 0.4s;
  background-color: var(--grey-0);
  border: 1.5px solid var(--grey-0);
  color: var(--white);
}

#button-grey-4-medium:hover {
  transition: all 0.4s;
  background-color: var(--grey-0);
  border: 1.5px solid var(--grey-0);
  color: var(--white);
}

#button-blue-1-big {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 146px;
  background-color: var(--brand-1);
  border: 1.5px solid var(--brand-1);
  border-radius: 4px;
  gap: 10px;

  color: var(--white);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

#button-blue-1-medium {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 119px;
  background-color: var(--brand-1);
  border: 1.5px solid var(--brand-1);
  border-radius: 4px;
  gap: 10px;

  color: var(--white);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
}

#button-blue-1-big:hover {
  transition: all 0.4s;
  background-color: var(--white);
  border: 1.5px solid var(--brand-1);
  color: var(--brand-1);
}

#button-blue-1-medium:hover {
  transition: all 0.4s;
  background-color: var(--white);
  border: 1.5px solid var(--brand-1);
  color: var(--brand-1);
}

#button-blue-login-big {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 48px;
  background-color: var(--brand-1);
  border: 1.5px solid var(--brand-1);
  border-radius: 4px;
  gap: 10px;

  color: var(--white);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

#button-blue-login-medium {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 119px;
  background-color: var(--brand-1);
  border: 1.5px solid var(--brand-1);
  border-radius: 4px;
  gap: 10px;

  color: var(--white);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
}

#button-blue-login-big:hover {
  transition: all 0.4s;
  background-color: var(--white);
  border: 1.5px solid var(--brand-1);
  color: var(--brand-1);
}

#button-blue-login-medium:hover {
  transition: all 0.4s;
  background-color: var(--white);
  border: 1.5px solid var(--brand-1);
  color: var(--brand-1);
}

#button-blue-register-big {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 48px;
  background-color: var(--white);
  border: 1.6px solid var(--grey-3);
  border-radius: 4px;
  gap: 10px;

  color: var(--black);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

#button-blue-register-big:focus {
  background-color: var(--brand-1);
  border: 1.5px solid var(--brand-1);
  color: var(--white);
  
}

#button-blue-2-big {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 146px;
  background-color: var(--brand-2);
  border: 1.5px solid var(--brand-2);
  border-radius: 4px;
  gap: 10px;

  color: var(--white);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

#button-blue-2-medium {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 119px;
  background-color: var(--brand-2);
  border: 1.5px solid var(--brand-2);
  border-radius: 4px;
  gap: 10px;

  color: var(--white);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
}

#button-blue-2-big:hover {
  transition: all 0.4s;
  background-color: var(--brand-4);
  border: 1.5px solid var(--brand-1);
  color: var(--brand-1);
}

#button-blue-2-medium:hover {
  transition: all 0.4s;
  background-color: var(--brand-4);
  border: 1.5px solid var(--brand-1);
  color: var(--brand-1);
}

#button-blue-3-big {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 146px;
  background-color: var(--brand-4);
  border: 1.5px solid var(--brand-4);
  border-radius: 4px;
  gap: 10px;

  color: var(--brand-1);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

#button-blue-3-medium {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 119px;
  background-color: var(--brand-4);
  border: 1.5px solid var(--brand-4);
  border-radius: 4px;
  gap: 10px;

  color: var(--brand-1);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
}

#button-blue-3-big:hover {
  transition: all 0.4s;
  background-color: var(--white);
  border: 1.5px solid var(--white);
  color: var(--black);
}

#button-blue-3-medium:hover {
  transition: all 0.4s;
  background-color: var(--white);
  border: 1.5px solid var(--white);
  color: var(--black);
}


#button-white-6-big {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 146px;
  background-color: var(--white);
  border: 1.5px solid var(--white);
  border-radius: 4px;
  gap: 10px;

  color: var(--grey-0);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

#button-white-6-medium {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 119px;
  background-color: var(--white);
  border: 1.5px solid var(--white);
  border-radius: 4px;
  gap: 10px;

  color: var(--grey-0);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
}

#button-red-1-big {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 146px;
  background-color: var(--alert-3);
  border: 1.5px solid var(--alert-3);
  border-radius: 4px;
  gap: 10px;

  color: var(--alert-1);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

#button-red-1-medium {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 119px;
  background-color: var(--alert-3);
  border: 1.5px solid var(--alert-3);
  border-radius: 4px;
  gap: 10px;

  color: var(--alert-1);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
}

#button-red-1-big:hover {
  transition: all 0.4s;
  background-color: var(--alert-2);
  border: 1.5px solid var(--alert-2);
  color: var(--alert-1);
}

#button-red-1-medium:hover {
  transition: all 0.4s;
  background-color: var(--alert-2);
  border: 1.5px solid var(--alert-2);
  color: var(--alert-1);
}

#button-green-1-big {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 146px;
  background-color: var(--sucess-3);
  border: 1.5px solid var(--sucess-3);
  border-radius: 4px;
  gap: 10px;

  color: var(--sucess-1);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

#button-green-1-medium {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 119px;
  background-color: var(--sucess-3);
  border: 1.5px solid var(--sucess-3);
  border-radius: 4px;
  gap: 10px;

  color: var(--sucess-1);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
}

#button-green-1-big:hover {
  transition: all 0.4s;
  background-color: var(--sucess-2);
  border: 1.5px solid var(--sucess-2);
  color: var(--sucess-1);
}

#button-green-1-medium:hover {
  transition: all 0.4s;
  background-color: var(--sucess-2);
  border: 1.5px solid var(--sucess-2);
  color: var(--sucess-1);
}

#button-brand-big {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 146px;
  background-color: var(--brand-3);
  border: 1.5px solid var(--brand-3);
  border-radius: 4px;
  gap: 10px;

  color: var(--brand-4);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

#button-brand-medium {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 119px;
  background-color: var(--brand-3);
  border: 1.5px solid var(--brand-3);
  border-radius: 4px;
  gap: 10px;

  color: var(--brand-4);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
}

/* form */

form {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
}

label {
  color: var(--grey-1);
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  margin-top: 19px;
  margin-bottom: 8px;
}

input {
  width: 315px;
  height: 48px;
  padding-left: 5px;
  border: 2px solid var(--grey-8);
  border-radius: 4px;

  color: var(--grey-1);
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
}

input:focus {
  background-color: var(--grey-8);
}

input:hover {
  border: solid 1.5px var(--brand-2);
}

.wrapper-input {
  display: flex;
  flex-direction: column;
}
.wrapper-input > input {
  height: 80px;
}

`;

export default Global;
