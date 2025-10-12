import classNames from 'classnames/bind';
import classes from './sneaker-photo-previewer.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  return {
    cnRoot: cn('root'),
    cnDesktopGrid: cn('desktopGrid'),
    cnMobileSlider: cn('mobileSlider'),
    cnBigImage: cn('bigImage'),
    cnThumbs: cn('thumbs'),
    cnThumb: cn('thumb'),
    cnThumbActive: cn('thumbActive'),
    cnImageWrapper: cn('imageWrapper'),
    cnPlaceholder: cn('placeholder'),
  };
};
