const infinityScroll = (fetchData) => {
  return new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // window.scrollTo(0, 0);
        fetchData();
        observer.unobserve(entry.target);
      }
    });
  }, {});
};

export default infinityScroll;
