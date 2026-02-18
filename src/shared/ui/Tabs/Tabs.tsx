import { memo, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (_tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
  const {
    className,
    tabs,
    value,
    onTabClick,
  } = props;

  // Обработчик клика по табу, который вызывает переданный в пропсах onTabClick с данным табом
  const clickHandle = useCallback((tab: TabItem) => () => {
    onTabClick(tab);
  }, [onTabClick]);

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          key={tab.value}
          onClick={clickHandle(tab)}
          className={cls.tab}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});

// import { memo, ReactNode, useCallback } from 'react';
// import { classNames } from 'shared/lib/classNames/classNames';
// import { Card, CardTheme } from '../Card/Card';
// import cls from './Tabs.module.scss';

// export interface TabItem {
//   value: string;
//   content: ReactNode;
// }

// interface TabsProps {
//   className?: string;
//   tabs: TabItem[];
//   value: string;
//   onTabClick: (tab: TabItem) => void;
//   gap?: string; // Added for flexibility
// }

// export const Tabs = memo((props: TabsProps) => {
//   const {
//     className,
//     tabs,
//     value,
//     onTabClick,
//     gap = '8px', // Default gap
//   } = props;

//   const clickHandle = useCallback((tab: TabItem) => {
//     return () => {
//       onTabClick(tab);
//     };
//   }, [onTabClick]);

//   return (
//     <div
//       className={classNames(cls.Tabs, {}, [className])}
//       role="tablist" // Accessibility
//       style={{ gap }} // Custom gap
//     >
//       {tabs.map((tab) => (
//         <Card
//           theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
//           key={tab.value}
//           onClick={clickHandle(tab)}
//           className={cls.tab}
//           role="tab" // Accessibility
//           aria-selected={tab.value === value} // Accessibility
//           tabIndex={tab.value === value ? 0 : -1} // Accessibility
//         >
//           {tab.content}
//         </Card>
//       ))}
//     </div>
//   );
// });
