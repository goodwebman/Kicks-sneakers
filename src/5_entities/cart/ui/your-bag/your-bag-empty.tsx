import EmptyCart from '@shared/assets/imgs/shopping.png';
import { Routes } from '@shared/constants/routes';
import { Button } from '@shared/ui/buttons/button';
import { useNavigate } from 'react-router-dom';
import { getClasses } from './styles/get-classes';

export const YourBagEmpty = () => {
  const { cnEmptyWrapper, cnEmptyTitle, cnEmptySubtitle, cnEmptyImage } =
    getClasses();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(Routes.sneakers.root);
  };
  return (
    <div className={cnEmptyWrapper}>
      <img className={cnEmptyImage} src={EmptyCart} alt="Empty bag" />
      <h2 className={cnEmptyTitle}>Your bag is empty</h2>
      <p className={cnEmptySubtitle}>
        Looks like you haven’t added anything yet. Let’s fix that!
      </p>
      <Button onClick={handleNavigate} fullWidth>
        START SHOPPING
      </Button>
    </div>
  );
};
