import userCard from '@shared/assets/imgs/user-card.png';
import type { FC } from 'react';
import { getClasses } from './styles/get-classes';

type UserInfoType = {
  name?: string;
  email?: string;
  permisson?: string;
};

const UserInfo: FC<UserInfoType> = ({ name, permisson, email }) => {
  const {
    cnRoot,
    cnImageWrapper,
    cnEmail,
    cnName,
    cnPermission,
    cnTextWrapper,
  } = getClasses();
  return (
    <div className={cnRoot}>
      <img draggable={false} className={cnImageWrapper} src={userCard} />
      <div className={cnTextWrapper}>
        <p className={cnEmail}>{email}</p>
        <h1 className={cnName}>{name}</h1>
        <p className={cnPermission}>{permisson}</p>
      </div>
    </div>
  );
};

export default UserInfo;
