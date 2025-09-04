import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { ErrorPage } from 'widgets/ErrorPage';

// Дочерние компоненты, которые будут обернуты. Под тип ReactNode
// поппадает любой React компонент
interface ErrorBoundaryProps {
  children: ReactNode;
}

// Флаг, указывающий на наличие ошибки
interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary
  extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false }; // Изначально ошибок нет
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true }; // Обновляем состояние при ошибке
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Suspense fallback="">
          <ErrorPage />
        </Suspense>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
