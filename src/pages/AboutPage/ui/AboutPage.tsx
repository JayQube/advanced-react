import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      {t('About page')}
    </Page>
  );
};

export default AboutPage;
