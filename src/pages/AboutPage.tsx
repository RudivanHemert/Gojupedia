import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Heart, Shield, Users } from 'lucide-react';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-red-500" />
            {t('about.title', 'Over GojuPedia')}
          </CardTitle>
          <CardDescription>
            {t('about.subtitle', 'Uw complete bron voor Goju-Ryu Karate kennis')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="prose prose-sm max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              {t('about.description', 'De maker van deze app heeft zijn best gedaan om de app te vullen met de best beschikbare data uit betrouwbare bronnen en van ervaren karate beoefenaars.')}
            </p>
            
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                {t('about.dataQuality.title', 'Kwaliteit van de Data')}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t('about.dataQuality.description', 'Alle informatie in deze app is zorgvuldig geselecteerd en gecontroleerd. We streven ernaar om de meest accurate en up-to-date informatie te bieden over Goju-Ryu Karate.')}
              </p>
            </div>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Users className="h-5 w-5" />
                {t('about.community.title', 'Community')}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t('about.community.description', 'Deze app is gemaakt voor de Goju-Ryu community wereldwijd. We waarderen feedback en suggesties om de app te verbeteren.')}
              </p>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Mail className="h-5 w-5" />
              {t('about.contact.title', 'Contact')}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t('about.contact.description', 'Als u in contact wilt komen met de appmaker betreffende de inhoud of functionaliteit van deze app, kunt u een e-mail sturen naar:')}
            </p>
            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
              <a 
                href="mailto:rudivanhemert@gmail.com" 
                className="text-primary font-medium hover:underline break-all"
              >
                rudivanhemert@gmail.com
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {t('about.contact.feedback', 'We waarderen uw feedback en zullen zo snel mogelijk reageren.')}
            </p>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold mb-2">
              {t('about.version.title', 'Versie')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('about.version.number', 'Versie 1.0.0')}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage; 