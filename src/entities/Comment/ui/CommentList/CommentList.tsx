import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
// import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
   className?: string;
   comments?: Comment[];
   isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const {
    className,
    comments,
    isLoading,
  } = props;

  // const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const mods: Mods = {};

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.CommentList, mods, [className])}>
      {comments?.length
        ? comments.map((comment) => (
          <CommentCard
            className={cls.comment}
            comment={comment}
            isLoading={isLoading}
          />
        ))
        : <Text text={t('There are no comments')} />}
    </div>
  );
});
