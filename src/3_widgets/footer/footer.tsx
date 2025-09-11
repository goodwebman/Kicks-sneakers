import type { FC } from 'react';
import SvgFacebook from '../../6_shared/ui/icons/facebook';
import SvgFooterLogo from '../../6_shared/ui/icons/footer-logo';
import SvgInstagram from '../../6_shared/ui/icons/instagram';
import SvgLogoHuge from '../../6_shared/ui/icons/logo-huge';
import SvgTiktok from '../../6_shared/ui/icons/tiktok';
import SvgTwitter from '../../6_shared/ui/icons/twitter';
import { getClasses } from './styles/get-classes';

type FooterProps = {
  className?: string;
};

export const Footer: FC<FooterProps> = ({ className }) => {
  const {
    cnRoot,
    cnTopSection,
    cnTopInfo,
    cnTitle,
    cnSuptitle,
    cnLogo,
    cnBottomSection,
    cnBottomTitle,
    cnBottomTitleSecondary,
    cnBottomText,
    cnBottomLinks,
    cnBottomIconsWrapper,
    cnBottomLogo,
    cnBottomList,
    cnBottomLogoWrapper,
  } = getClasses({ className });

  return (
    <footer className={cnRoot}>
      <section className={cnTopSection}>
        <div className={cnTopInfo}>
          <h1 className={cnTitle}>Join our KicksPlus Club & get 15% off</h1>
          <p className={cnSuptitle}>Sign up for free! Join the community.</p>
        </div>
        <SvgFooterLogo className={cnLogo} />
      </section>

      <div className={cnBottomSection}>
        <ul className={cnBottomList}>
          <li>
            <h1 className={cnBottomTitle}>About us</h1>
            <p className={cnBottomText}>
              We are the biggest hyperstore in the universe.
              <br />
              We got you all cover with our exclusive
              <br /> collections and latest drops.
            </p>
          </li>

          <li>
            <h1 className={cnBottomTitleSecondary}>Categories</h1>
            <div className={cnBottomLinks}>
              <a href="/">Runners</a>
              <a href="/">Sneakers</a>
              <a href="/">Basketball</a>
              <a href="/">Outdoor</a>
              <a href="/">Golf</a>
              <a href="/">Hiking</a>
            </div>
          </li>

          <li>
            <h1 className={cnBottomTitleSecondary}>Company</h1>
            <div className={cnBottomLinks}>
              <a href="/">About</a>
              <a href="/">Contact</a>
              <a href="/">Blogs</a>
            </div>
          </li>

          <li>
            <h1 className={cnBottomTitleSecondary}>Follow us</h1>
            <div className={cnBottomIconsWrapper}>
              <a href="">
                <SvgFacebook width={25} height={25} />
              </a>
              <a href="">
                <SvgInstagram width={25} height={25} />
              </a>
              <a href="">
                <SvgTwitter width={25} height={25} />
              </a>
              <a href="">
                <SvgTiktok width={25} height={25} />
              </a>
            </div>
          </li>

          
        </ul>
        <div className={cnBottomLogoWrapper}>
            <SvgLogoHuge className={cnBottomLogo} />
          </div>
      </div>
    </footer>
  );
};
