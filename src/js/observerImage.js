function observerImage() {
  const images = document.querySelectorAll('.gallery img');
  const options = {
    rootMargin: '300px',
  };
  const intersectionObserverImages = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target;
        const src = image.dataset.sourceprew;
        image.src = src;
        observer.unobserve(image);
      }
    });
  }, options);

  images.forEach(image => intersectionObserverImages.observe(image));
}
export default observerImage;