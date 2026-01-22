import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
   className?: string;
   block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
  const {
    className,
    block,
  } = props;

  const mods: Mods = {};

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.ArticleCodeBlockComponent, mods, [className])}>
      <Code
        text={block.code}
      />
    </div>
  );
});
