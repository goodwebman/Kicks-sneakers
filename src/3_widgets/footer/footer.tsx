import type { FC } from 'react';
import SvgFooterLogo from '../../6_shared/ui/icons/footer-logo';
import { getClasses } from './styles/get-classes'

type FooterProps = {
  className?: string
}

export const Footer: FC<FooterProps> = ({className}) => {
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
  } = getClasses({className});

  return (
    <footer className={cnRoot}>
      <section className={cnTopSection}>
        <div className={cnTopInfo}>
          <h1 className={cnTitle}>
            Join our KicksPlus Club & get 15% off
          </h1>
          <p className={cnSuptitle}>
            Sign up for free! Join the community.
          </p>
        </div>
        <SvgFooterLogo className={cnLogo} />
      </section>

      <ul className={cnBottomSection}>
        <li>
          <h1 className={cnBottomTitle}>About us</h1>
          <p>
            We are the biggest hyperstore in the universe. We got you all cover
            with our exclusive collections and latest drops.
          </p>
        </li>

        <li>
          <h1 className={cnBottomTitleSecondary}>Categories</h1>
          <p>Runners</p>
          <p>Sneakers</p>
          <p>Basketball</p>
          <p>Outdoor</p>
          <p>Golf</p>
          <p>Hiking</p>
        </li>

        <li>
          <h1 className={cnBottomTitleSecondary}>Company</h1>
          <p>About</p>
          <p>Contact</p>
          <p>Blogs</p>
        </li>

        <li>
          <h1 className={cnBottomTitleSecondary}>Follow us</h1>
          <div></div>
        </li>
      </ul>
    </footer>
  );
};
