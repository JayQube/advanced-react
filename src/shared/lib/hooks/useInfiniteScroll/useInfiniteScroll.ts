import { MutableRefObject, useEffect, useRef } from 'react';

export interface UseInfiniteScrollOptions {
  // Функция, которая вызывается при достижении триггерного элемента
  callback?: () => void;
  // Ссылка на триггерный элемент, при достижении которого вызывается callback
  triggerRef: MutableRefObject<HTMLElement>;
  // Ссылка на элемент-обертку, внутри которого происходит скролл
  wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({ callback, wrapperRef, triggerRef }: UseInfiniteScrollOptions) {
  // Ссылка на объект IntersectionObserver
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Получаем текущие DOM-элементы из переданных рефов
    // Без .current мы бы работали с объектом ref, а не с его значением
    // wrapperRef.current = это div, внутри которого происходит скролл
    // wrapperRef - это объект, который содержит в себе свойство current, которое
    // и есть DOM-элемент
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;

    // Наблюдатель создается только если передана callback-функция
    if (callback) {
      const options = {
        // Элемент-контейнер для наблюдения
        root: wrapperElement,
        // Отступы вокруг root контейнера
        rootMargin: '0px',
        // Процент видимости триггерного элемента для срабатывания
        // (1.0 = 100% элемента должно быть видно)
        threshold: 1.0,
      };

      // Создаем новый IntersectionObserver и сохраняем его в рефе
      observer.current = new IntersectionObserver(([entry]) => {
        // Если триггерный элемент виден, вызываем callback
        // Intersecting = Пересечение
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      // Начинаем наблюдение за триггерным элементом
      observer.current.observe(triggerElement);
    }

    return () => {
      // При размонтировании компонента или изменении зависимостей, отключаем наблюдение
      if (observer.current && triggerElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.current.unobserve(triggerElement);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
}
