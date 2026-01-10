import { useTheme } from '../hooks/useTheme'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)] ${
        isDark ? 'bg-gray-600' : 'bg-gray-300'
      }`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span
        className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white shadow-md transition-all duration-300 flex items-center justify-center text-xs ${
          isDark ? 'left-[28px]' : 'left-1'
        }`}
      >
        {isDark ? '🌙' : '☀️'}
      </span>
    </button>
  )
}

export default ThemeToggle

