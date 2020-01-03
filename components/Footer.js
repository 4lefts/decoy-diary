const Footer = () => {
  const calcYear = () => {
    const d = new Date();
    return d.getFullYear();
  };
  return (
    <>
      <footer>
        <p>&copy; Decoy Community Primary School, {calcYear()}.</p>
      </footer>
      <style jsx>
        {`
          footer {
            text-align: right;
            grid-area: footer;
          }
        `}
      </style>
    </>
  );
};

export default Footer;
