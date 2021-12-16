import React from "react";

function LazyImage ({ src, alt }) {  
  const lazyLoadingSupported = 'loading' in HTMLImageElement.prototype;
  
  const attributes = lazyLoadingSupported ? { loading: 'lazy' } : {}
  
  return (
    <img
      src={src}
      alt={alt}
      { ...attributes }
    />
  );
};

export default LazyImage;