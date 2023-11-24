import { IMAGE_URL, NO_IMAGE } from "../constants";

export const ProductImage = ({ src, alt, ...props }) => {
  const productImage = src ? `${IMAGE_URL}${src}` : NO_IMAGE;

  const handleImageError = (e) => {
    if (e.target.src !== `${IMAGE_URL}${NO_IMAGE}`) {
      e.target.src = NO_IMAGE;
    }
  };

  return (
    <img
      src={productImage}
      alt={alt}
      onError={handleImageError}
      crossOrigin="anonymous"
      loading="lazy"
      {...props} // spread other props (like className, style, etc.)
    />
  );
};
