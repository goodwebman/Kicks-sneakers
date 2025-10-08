import { ordersSelectors } from '@entities/orders/module/selectors';
import { OrderItem } from '@entities/orders/ui/order-item/order-item';
import { userSlice } from '@entities/user/model/slice';
import { Routes } from '@shared/constants/routes';
import { useAppSelector } from '@shared/redux/store';
import { formatDate } from '@shared/utils/format-date';
import { pluralizeProduct } from '@shared/utils/pluralize-product';
import { useNavigate } from 'react-router-dom';
import { getClasses } from './styles/get-classes';

export const OrdersPage = () => {
  const {
    cnRoot,
    cnTitle,
    cnList,
    cnCard,
    cnCardInfo,
    cnMeta,
    cnStatus,
    cnItems,
    cnEmpty,
    cnSneaker,
  } = getClasses();

  const user = useAppSelector(userSlice.selectors.selectUser);
  const navigate = useNavigate();

  const myOrders = useAppSelector(state =>
    ordersSelectors.selectUserOrders(state, user!.id),
  );

  const handleNavigate = (sneakerId: number) => {
    navigate(Routes.sneakers.details(sneakerId));
  };

  if (!myOrders.length) {
    return <div className={cnEmpty}>У вас пока нет заказов 😔</div>;
  }

  return (
    <div className={cnRoot}>
      <h1 className={cnTitle}>Мои заказы</h1>
      <ul className={cnList}>
        {myOrders.map(order => {
          const total =
            order.items.reduce(
              (sum, item) => sum + item.price * (item.quantity ?? 1),
              0,
            ) + (order.formData?.deliveryOptions?.price ?? 0);

          return (
            <li key={order.id} className={cnCard}>
              <div className={cnCardInfo}>
                <span>Сформирован: {formatDate(order.createdAt)}</span>

                <span className={cnStatus(order.status)}>{order.status}</span>
              </div>

              <div className={cnMeta}>
                <span>Итого: ${total}</span>
                <span>{pluralizeProduct(order.items.length)}</span>
                <span>
                  Доставка: {order.formData.deliveryOptions.type} — $
                  {order.formData.deliveryOptions.price}
                </span>
              </div>

              <div className={cnItems}>
                {order.items.map(item => (
                  <OrderItem
                    className={cnSneaker}
                    onClick={() => handleNavigate(item.sneakerId)}
                    key={item.sneakerId}
                    sneaker={item}
                  />
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
