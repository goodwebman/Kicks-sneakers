import { IconButton } from '@shared/ui/buttons/icon-button';
import SvgChevronLeft from '@shared/ui/icons/chevron-left';
import SvgChevronRight from '@shared/ui/icons/chevron-right';

export const YouMayAlsoLike = () => {
  return (
    <div>
      <div>
        <h1></h1>
        <div>
          <IconButton
            size="small"
            icon={<SvgChevronLeft width={20} height={20} />}
          />
          <IconButton
            size="small"
            icon={<SvgChevronRight width={20} height={20} />}
          />
        </div>
      </div>
    </div>
  );
};
