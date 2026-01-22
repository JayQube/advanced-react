// import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
// import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
   className?: string;
   block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const {
    className,
    block,
  } = props;

  // const dispatch = useAppDispatch();
  // const { t } = useTranslation();

  const mods: Mods = {};

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.ArticleTextBlockComponent, mods, [className])}>
      {block.title && (
        <Text
          className={cls.title}
          title={block.title}
        />
      )}
      {block.paragraphs.map((paragraph) => (
        <Text
          key={paragraph}
          className={cls.paragraph}
          text={paragraph}
        />
      ))}
    </div>
  );
});
