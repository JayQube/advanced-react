import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './ArticleListItem.module.scss';
import {
  Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    className,
    article,
    view,
  } = props;

  const { t } = useTranslation();
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [article.id, navigate]);

  const types = (
    <Text
      text={article.type.join(', ')}
      className={cls.types}
    />
  );
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <Card className={classNames('', {}, [className, cls[view]])}>
        <div className={cls.header}>
          <Avatar size={30} src={article.user.avatar} />
          <Text text={article.user.username} className={cls.username} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <Text title={article.title} className={cls.title} />
        {types}
        <img
          className={cls.img}
          src={article.img}
          alt={article.title}
        />
        {textBlock && (
          <ArticleTextBlockComponent
            className={cls.textBlock}
            block={textBlock}
            textPreview
          />
        )}
        <div className={cls.footer}>
          <Button theme={ButtonTheme.OUTLINE} onClick={onOpenArticle}>
            {t('Read more')}
          </Button>
          {views}
        </div>
      </Card>
    );
  }

  return (
    <Card onClick={onOpenArticle} className={classNames('', {}, [className, cls[view]])}>
      <div className={cls.imageWrapper}>
        <img src={article.img} alt={article.title} className={cls.img} />
        <Text
          className={cls.date}
          text={article.createdAt}
        />
      </div>
      <div className={cls.infoWrapper}>
        {types}
        {views}
      </div>
      <Text
        className={cls.title}
        text={article.title}
      />
    </Card>
  );
});
