module.exports = {
  env: {
    // Предопределяет глобальные переменные браузера (window, document и т.д.)
    browser: true,
    // Включает все ES2021 глобальные переменные и синтаксис
    es2021: true,
    // Добавляет глобальные переменные Jest (describe, test, expect и т.д.)
    jest: true,
  },
  extends: [
    // Рекомендуемые правила для React
    'plugin:react/recommended',
    // Правила стиля Airbnb (очень популярный стандарт)
    'airbnb',
    // Правила для i18n библиотеки i18next
    'plugin:i18next/recommended',
    // "plugin:storybook/recommended"
  ],
  // Парсер для TypeScript
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Разрешает синтаксис JSX
      // Без jsx: true ESLint не понимал бы синтаксис<MyComponent />
    },
    // Использовать самый новый стандарт ECMAScript
    ecmaVersion: 'latest',
    // Разрешает использование import/export
    sourceType: 'module',
  },
  plugins: [
    'react', // Добавляет React-специфичные правила
    '@typescript-eslint', // Добавляет TypeScript-специфичные правила
    'i18next', // Правила для интернационализации (i18next)
    'react-hooks',
  ],
  rules: {
    // Отступы в JSX (2 пробела)
    'react/jsx-indent': [2, 2],

    // Отступы для пропсов в JSX (2 пробела)
    'react/jsx-indent-props': [2, 2],

    // Общие отступы в коде (2 пробела)
    indent: [2, 2],
    // indent: [2, 2 || 'tab'],

    // Разрешенные расширения для файлов с JSX
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],

    // Отключает проверку unresolved imports (нужно для TypeScript + Webpack)
    'import/no-unresolved': 'off',

    // Не требует default export в модулях
    'import/prefer-default-export': 'off',

    // Предупреждение для неиспользуемых переменных (не ошибка), игнорирует
    // нижнее подчеркивание. Затычка для неиспользуемых переменных.
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    // Не требует defaultProps для необязательных пропсов
    'react/require-default-props': 'off',

    // Не требует импорта React в каждом файле с JSX (с React 17+)
    'react/react-in-jsx-scope': 'off',

    // Предупреждение при использовании spread в пропсах
    'react/jsx-props-no-spreading': 'warn',

    // Разные стили объявления функциональных компонентов
    'react/function-component-definition': 'off',

    // Отключает проверку затенения переменных
    // Затенение возникает, когда Внутри функции/блока создаётся переменная с именем, которое уже существует
    //  во внешней области видимости.
    'no-shadow': 'off',

    // Отключает требование указания расширений файлов в импортах
    'import/extensions': 'off',

    // Отключает проверку на лишние зависимости
    'import/no-extraneous-dependencies': 'off',

    // Разрешает использование подчеркивания в начале имен (_privateVar)
    'no-underscore-dangle': 'off',

    // Проверка i18n - требует использования переводов для строк (только в JSX), игнорирует URL строки
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: ['to', 'data-testid'],
      },
    ],

    // Максимальная длина строки 100 символов (игнорирует комментарии)
    'max-len': [
      'error',
      {
        code: 100,
        ignoreComments: true,
        // "argsIgnorePattern": '^_'
      },
    ],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-param-reassign': 'off',
  },
  globals: {
    // Разрешаем использовать кастомную глобальную переменную (например, для dev/prod режимов)
    __IS_DEV__: true,
  },
  // Переопределяем правила для файлов с тестами
  overrides: [
    {
      // Ищем файлы с тестами
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      // Выключаем правило no-literal-string
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
};
