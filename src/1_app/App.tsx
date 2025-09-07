import { IconButton } from '../6_shared/ui/buttons/icon-button';
import SvgPlus from '../6_shared/ui/icons/plus';
import './App.css';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <IconButton size='small' icon={<SvgPlus width={20} height={20} />} />
    </div>
  );
}

export default App;
