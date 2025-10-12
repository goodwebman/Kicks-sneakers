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
    cnThumbs,
    cnThumb,
    cnThumbActive,
    cnImageWrapper,
    cnPlaceholder,
  } = getClasses();

  const [activeIndex, setActiveIndex] = useState(0);

  const renderImage = (src?: string, alt?: string) => {
    if (!src) {
      return <div className={cnPlaceholder}>Фото нет :(</div>;
    }
    return <img draggable={false} src={src} alt={alt} />;
  };

  return (
    <div className={cnRoot}>
      <div className={cnDesktopGrid}>
        {images.length > 0 ? (
          images.slice(0, 4).map((src, i) => (
            <div key={i} className={cnImageWrapper}>
              {renderImage(src, `Sneaker ${i}`)}
            </div>
          ))
        ) : (
          <div className={cnImageWrapper}>
            {renderImage(undefined, 'No image')}
          </div>
        )}
      </div>

      <div className={cnMobileSlider}>
        <div className={cnImageWrapper}>
          {renderImage(images[activeIndex], 'Sneaker active')}
        </div>

        <div className={cnThumbs}>
          {images.length > 0 ? (
            images.map((src, i) => (
              <div
                key={i}
                className={`${cnThumb} ${i === activeIndex ? cnThumbActive : ''}`}
                onClick={() => setActiveIndex(i)}
              >
                <div className={cnImageWrapper}>
                  {renderImage(src, `Sneaker thumb ${i}`)}
                </div>
              </div>
            ))
          ) : (
            <div className={cnThumb}>
              <div className={cnImageWrapper}>{renderImage()}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
