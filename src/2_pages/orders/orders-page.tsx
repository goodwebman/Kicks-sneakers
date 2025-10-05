import { ordersSlice } from '@entities/orders/module/slice';
import { SneakerCard } from '@entities/sneaker/ui/sneaker-card/sneaker-card';
import { userSlice } from '@entities/user/model/slice';
import { useAppSelector } from '@shared/redux/store';

export const OrdersPage = () => {
  const user = useAppSelector(userSlice.selectors.selectUser);
  const myOrders = useAppSelector(state =>
    ordersSlice.selectors.selectUserOrders(state, String(user!.id)),
  );

  return (
    <div className="orders-page">
      <h1>Мои заказы</h1>
      <ul className="orders-list">
        {myOrders.map(order => (
          <li key={order.id} className="order-card">
            <h3>Заказ №{order.id}</h3>
            <p>Дата: {order.createdAt}</p>
            <p>Статус: {order.status}</p>
            <p>Товаров: {order.items.length}</p>
            <p>
              Товары:
              {order.items.map(item => (
                //@ts-ignore
                <SneakerCard sneaker={item} />
              ))}
            </p>
            <p>
              Доставка: {order.formData.deliveryOptions.type} ( $
              {order.formData.deliveryOptions.price})
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
