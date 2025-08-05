// Mods — это тип, представляющий объект, где:
// ключи — строки (имена классов),
// значения — boolean или string (если true или строка — класс добавляется, если
// false или undefined/null — не добавляется).
type Mods = Record<string, boolean | string>

// mods: Mods = {} - по умолчанию пустой объект
// mods - Объект модификаторов (например, { hovered: true, disabled: false })
// additional: string[] = [] - по умолчанию массив строк
// additional - Массив дополнительных классов (например, ['red', 'large'])
// В additional описание класса содержится в компоненте в котором вызывается компонент
// для которого применяются стили
// Функция возвращает строку
export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    // Основной класс
    cls,
    // Дополнительные классы (разворачиваются через spread)
    // Фильтрация для отсечения undefined
    ...additional.filter(Boolean),
    // Object.entries(mods) превращает объект в массив пар [ключ, значение]
    ...Object.entries(mods)
    // Оставляем только те, у которых значение true/непустая строка
      .filter(([className, value]) => Boolean(value))
    // .map(([className, value]) => className) превращает массив
    // пар обратно в массив строк (только имена классов).
      .map(([className, value]) => className),
  ]
  // Массив склеивается в строку
    .join(' ');
}
