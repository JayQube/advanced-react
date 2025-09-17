import { fireEvent, screen } from '@testing-library/react';
import {
  renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';

describe('Sidebar', () => {
  test('Test render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test toggle', () => {
    renderWithTranslation(<Sidebar />);
    // Получаем кнопку по метке
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    // expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    // Имитируем нажатие кнопки
    fireEvent.click(toggleBtn);
    // Ожидаем что на кнопке появится класс collapsed
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
