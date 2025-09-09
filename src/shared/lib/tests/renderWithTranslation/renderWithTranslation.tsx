import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18nForTests from "shared/config/i18n/i18nForTests";

// Принимаем компонент
export function renderWithTranslation(component: ReactNode) {
  return render(
    // i18n={i18nForTests}: наш конфиг для тестов
    <I18nextProvider i18n={i18nForTests}>
      {component}
    </I18nextProvider>
  )
}