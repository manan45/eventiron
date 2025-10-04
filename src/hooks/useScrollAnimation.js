import { useState, useEffect } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [element, setElement] = useState(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: '50px'
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [element, threshold]);

  return [setElement, isVisible];
};

export const useParallax = () => {
  const [element, setElement] = useState(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!element) return;

    const handleScroll = () => {
      const elementRect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementVisible = elementRect.top < windowHeight && elementRect.bottom > 0;

      if (elementVisible) {
        const scrollProgress = 1 - (elementRect.top + elementRect.height) / (windowHeight + elementRect.height);
        setOffset(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [element]);

  return [setElement, offset];
};

export const useStickyAnimation = (startOffset = 0, endOffset = 100) => {
  const [element, setElement] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const parentRect = element.parentElement.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      
      const start = parentRect.top + scrollPosition + startOffset;
      const end = parentRect.bottom + scrollPosition - endOffset - rect.height;
      
      if (scrollPosition >= start && scrollPosition <= end) {
        setIsSticky(true);
        setProgress((scrollPosition - start) / (end - start));
      } else {
        setIsSticky(false);
        setProgress(scrollPosition >= end ? 1 : 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [element, startOffset, endOffset]);

  return [setElement, { progress, isSticky }];
}; 