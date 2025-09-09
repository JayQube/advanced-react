import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('Test render', () => {
    // render: рендерит компонент и возвращает объект с методами для взаимодействия с ним
    render(<Button>TEST</Button>);
    // screen: глобальный объект, предоставляющий методы для поиска элементов в DOM
    // toBeInTheDocument: проверяет наличие элемента в документе
    expect(screen.getByText('TEST')).toBeInTheDocument()
  });

  test('Test clear theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    // toHaveClass: проверяет наличие класса в элементе
    expect(screen.getByText('TEST')).toHaveClass('clear');
    // screen.debug(): выводит DOM-дерево текущего состояния компонента или страницы в консоль.
    screen.debug();
  });
});
