import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Heart, Shield, Users, Info } from 'lucide-react';
import TheoryHeader from '@/components/theory/TheoryHeader';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <TheoryHeader 
        title={t('about.pageTitle')}
        description={t('about.pageDescription')}
        backUrl="/"
      />
      <div className="p-4 w-full">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Heart className="h-6 w-6 text-red-500 dark:text-red-400" />
              {t('about.title', 'Over GojuPedia')}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {t('about.subtitle', 'Uw complete bron voor Goju-Ryu Karate kennis')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-stone dark:prose-invert max-w-none">
              <p className="text-muted-foreground">
                {t('about.mainDescription')}
              </p>
              
              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">{t('about.vision.title')}</h3>
              <p className="text-muted-foreground">
                {t('about.vision.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card className="bg-muted/30 dark:bg-muted/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Shield className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                    {t('about.values.authenticity.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('about.values.authenticity.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-muted/30 dark:bg-muted/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Users className="h-5 w-5 text-green-500 dark:text-green-400" />
                    {t('about.values.community.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('about.values.community.description')}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-muted/30 dark:bg-muted/10 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Info className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                {t('about.contact.title')}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t('about.contact.description')}
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">{t('about.contact.email')}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage; 