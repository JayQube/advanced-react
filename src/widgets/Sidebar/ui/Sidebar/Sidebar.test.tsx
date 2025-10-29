import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';

describe('Sidebar', () => {
  test('Test render', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test toggle', () => {
    componentRender(<Sidebar />);
    // Получаем кнопку по метке
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    // expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    // Имитируем нажатие кнопки
    fireEvent.click(toggleBtn);
    // Ожидаем что на кнопке появится класс collapsed
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
