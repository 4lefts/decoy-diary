const GlobalStyles = () => (
  <style jsx global>
    {`
      html {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 62.5%;
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
      body {
        padding: 0;
        margin: 0;
        background: whitesmoke;
        font-family: "Open Sans", sans-serif;
        color: rgab(0, 0, 0, 0.875);
        font-size: 1.6rem;
      }
      h1,
      h2,
      h3 {
        font-family: "Quicksand", sans-serif;
        font-weight: 600;
      }
      h1 {
        font-size: 3.6rem;
      }
      @media print {
        body {
          font-size: 1rem;
        }
      }
    `}
  </style>
);

export default GlobalStyles;
