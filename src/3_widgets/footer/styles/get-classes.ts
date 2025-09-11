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
  const cnBottomList = cn('bottom_list')
  const cnBottomTitleSecondary = cn('bottom_title_secondary');
  const cnBottomText = cn('bottom_text');
  const cnBottomLinks = cn('bottom_links')
  const cnLinks = cn('bottom_links')
  const cnBottomIconsWrapper = cn('bottom_icons_wrapper')
  const cnBottomLogoHuge = cn('bottom_logo_huge')
  const cnBottomLogo = cn('bottom_logo')
  const cnBottomLogoWrapper = cn('bottom_logo_wrapper')

  return {
    cnRoot,
    cnTopSection,
    cnTopInfo,
    cnTitle,
    cnBottomList,
    cnSuptitle,
    cnLogo,
    cnBottomSection,
    cnBottomTitle,
    cnBottomTitleSecondary,
    cnBottomText,
    cnBottomLinks,
    cnLinks,
    cnBottomLogo,
    cnBottomIconsWrapper,
    cnBottomLogoHuge,
    cnBottomLogoWrapper
  };
};
