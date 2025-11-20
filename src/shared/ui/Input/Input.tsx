import React, {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

// Omit позволяет забрать из типа все пропсы, но исключить те, что не нужны
// Первым аргументом в Omit передаем то, что хоти забрать, вторым то, что исключить.
// В данном случает это пропсы value и  onChange
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (_value: string) => void;
  autoFocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    ...otherProps
  } = props;

  // Для установки автофокуса в инпут
  const ref = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      // В current оказвается наш инпут. focus() выбирает его
      ref.current?.focus();
    }
  }, [autoFocus]);

  // Для управления данными в инпуте
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    // Меняем позицию каретки, в зависимости от длинны текста в инпуте
    setCaretPosition(e.target.value.length);
  };

  // Каретка перестает отображается так как инпут не в фокусе
  const onBlur = () => {
    setIsFocused(false);
  };

  // Каретка отображается если инпут в фокусе
  const onFocus = () => {
    setIsFocused(true);
  };

  // Для изменения положения кастомной каретки. В зависимости от того
  // куда кликнули курсором или сдвинули стрелками
  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {/* Отрисовываем только если передали placeholder как пропс */}
      {placeholder && (
        <div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          {...otherProps}
        />
        {/* Каретка. Отображается если инпут в фокусе */}
        {isFocused && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 9}px` }}
          />
        )}
      </div>

    </div>
  );
});
