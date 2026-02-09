import { useCallback, useRef } from 'react';

// callback - функция, которая будет вызываться с определенной частотой
// delay - задержка в миллисекундах, которая определяет,
// как часто будет вызываться callback
// throttleRef - ref, который используется для отслеживания,
// можно ли вызывать callback в данный момент
// timeoutRef - ref, который хранит идентификатор таймера,
// чтобы можно было его очистить при необходимости
// eslint-disable-next-line no-unused-vars
export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const throttleRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  return useCallback((...args: any[]) => {
    // Если throttleRef.current === true, то это означает, что в данный
    // момент callback уже был вызван и нужно подождать, пока пройдет
    // delay, чтобы снова можно было вызвать callback
    // Приводим к истине false значение для if
    // Первый вызов true, потому что false
    // Последующие вызовы будут false, потому что true, и не будут проходить в if
    if (!throttleRef.current) {
      callback(...args);
      // Устанавливаем throttleRef.current в true, чтобы запретить вызов
      // callback до тех пор, пока не пройдет delay
      throttleRef.current = true;

      // Устанавливаем таймер, который через delay сбросит
      // throttleRef.current в false, чтобы можно было снова вызвать
      // callback
      timeoutRef.current = setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    }
  }, [callback, delay]);
}
