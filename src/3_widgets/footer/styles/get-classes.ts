import classNames from 'classnames/bind';
import classes from './footer.module.scss';

const cn = classNames.bind(classes);

type Args = {
  className?: string;
};

export const getClasses = ({ className }: Args) => {
  const cnRoot = cn('footer', className);

  const cnTopSection = cn('top_section');
  const cnTopInfo = cn('top_info');
  const cnTitle = cn('title');
  const cnSuptitle = cn('suptitle');
  const cnLogo = cn('logo_footer');

  const cnBottomSection = cn('bottom_section');
  const cnBottomTitle = cn('bottom_title');
  const cnBottomTitleSecondary = cn('bottom_title_secondary');

  return {
    cnRoot,
    cnTopSection,
    cnTopInfo,
    cnTitle,
    cnSuptitle,
    cnLogo,
    cnBottomSection,
    cnBottomTitle,
    cnBottomTitleSecondary,
  };
};
