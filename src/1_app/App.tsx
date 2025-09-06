import { useTheme } from '../6_shared/theme/context/use-theme';
import { ThemeNameEnum } from '../6_shared/theme/types';
import './App.css';

function App() {
  const { theme, selectTheme } = useTheme();
  return (
    <div style={{ backgroundColor: 'red' }}>
      <h1 style={{ color: `var(--color-white)` }}>
        Текущая тема: {theme.name}
      </h1>
      <button onClick={() => selectTheme(ThemeNameEnum.LIGHT)}>
        Светлая тема
      </button>
      <button onClick={() => selectTheme(ThemeNameEnum.DARK)}>
        Темная тема
      </button>

      <p
        style={{
          fontFamily: 'var(--font-family-rubik)',
          fontSize: 'var(--font-b4)',
        }}
      >
        Пример текста с типографикой
      </p>
    </div>
  );
}

export default App;
