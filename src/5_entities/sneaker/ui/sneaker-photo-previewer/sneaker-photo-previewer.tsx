import { useState } from 'react';
import { getClasses } from './styles/get-classes';

type SneakerPhotoPreviewerProps = {
  images: string[];
};

export const SneakerPhotoPreviewer = ({
  images,
}: SneakerPhotoPreviewerProps) => {
  const {
    cnRoot,
    cnDesktopGrid,
    cnMobileSlider,
    cnBigImage,
    cnThumbs,
    cnThumb,
    cnThumbActive,
  } = getClasses();

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cnRoot}>
      <div className={cnDesktopGrid}>
        {images.slice(0, 4).map((src, i) => (
          <img draggable={false} key={i} src={src} alt={`Sneaker ${i}`} />
        ))}
      </div>

      <div className={cnMobileSlider}>
        <img
          className={cnBigImage}
          src={images[activeIndex]}
          alt={`Sneaker active`}
        />

        <div className={cnThumbs}>
          {images.map((src, i) => (
            <div
              key={i}
              className={`${cnThumb} ${i === activeIndex ? cnThumbActive : ''}`}
              onClick={() => setActiveIndex(i)}
            >
              <img src={src} alt={`Sneaker thumb ${i}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
