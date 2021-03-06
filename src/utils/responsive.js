const responsive = (desktop, tablet, mobile) => ({
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: desktop || 3,
  },
  tablet: {
    breakpoint: { max: 1023, min: 555 },
    items: tablet || 2,
  },
  mobile: {
    breakpoint: { max: 554, min: 325 },
    items: mobile || 1,
  },
});

export default responsive;
