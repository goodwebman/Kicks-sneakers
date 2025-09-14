import { getClasses } from './styles/get-classes';

export const LimitedDiscount = () => {
  const { cnRoot, cnHeadline, cnDiscount, cnSuptitle } = getClasses();
  return (
    <div className={cnRoot}>
      <p className={cnHeadline}>Limited time only</p>
      <h1 className={cnDiscount}>Get 30% off</h1>
      <p className={cnSuptitle}>
        Sneakers made with your comfort in mind so you can put all of your focus
        into your next session.
      </p>
    </div>
  );
};
