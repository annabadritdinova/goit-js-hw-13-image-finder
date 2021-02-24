function observerLoad(Content) {
  const targetObserver = document.querySelector(
    '.gallery li:last-child',
  );
  const intersectionObserverContent = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        Content();
        observer.unobserve(targetObserver);
      }
    });
  });
  intersectionObserverContent.observe(targetObserver);
}
export default observerLoad;
