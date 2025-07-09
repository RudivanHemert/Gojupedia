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
        title="Over"
        description="Over Gojupedia en Goju Ryu Karate"
        backUrl="/"
      />
      <div className="p-4 max-w-4xl mx-auto">
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
                GojuPedia is een uitgebreide digitale encyclopedie gewijd aan Goju-Ryu Karate-Do. 
                Onze missie is om authentieke kennis en traditionele wijsheid te bewaren en toegankelijk 
                te maken voor karateka van alle niveaus.
              </p>
              
              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Onze Visie</h3>
              <p className="text-muted-foreground">
                We streven ernaar om de rijke geschiedenis, filosofie en technieken van Goju-Ryu 
                te documenteren en door te geven aan toekomstige generaties. Door moderne technologie 
                te combineren met traditionele kennis, creëren we een levende bron van karate wijsheid.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card className="bg-muted/30 dark:bg-muted/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Shield className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                    Authenticiteit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Alle content is gebaseerd op traditionele bronnen en wordt regelmatig 
                    gecontroleerd door ervaren karateka en instructeurs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-muted/30 dark:bg-muted/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Users className="h-5 w-5 text-green-500 dark:text-green-400" />
                    Community
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Een groeiende gemeenschap van karateka die samenwerken om kennis 
                    te delen en te verbeteren.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-muted/30 dark:bg-muted/10 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Info className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                Contact & Feedback
              </h3>
              <p className="text-muted-foreground mb-4">
                Heeft u suggesties, correcties of wilt u bijdragen aan GojuPedia? 
                We waarderen uw input om deze bron te verbeteren.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@gojupedia.com</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage; 