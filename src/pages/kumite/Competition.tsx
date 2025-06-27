import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { Card } from '@/components/ui/card';
import { Trophy, Award, AlertTriangle, Target } from 'lucide-react';

const Competition = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('kumite.competition.title')}
        description={t('kumite.competition.description')}
        backUrl="/kumite"
      />
      <div className="p-4 max-w-4xl mx-auto space-y-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t('kumite.competition.title')}</h2>
          <p className="text-muted-foreground mb-6">{t('kumite.competition.description')}</p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('kumite.competition.organizations.title')}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Trophy className="text-blue-600" size={20} />
                    <h4 className="font-medium">{t('kumite.competition.organizations.wkf.name')}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{t('kumite.competition.organizations.wkf.description')}</p>
                  <p className="text-sm"><strong>Role:</strong> {t('kumite.competition.organizations.wkf.role')}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Award className="text-green-600" size={20} />
                    <h4 className="font-medium">{t('kumite.competition.organizations.wkc.name')}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{t('kumite.competition.organizations.wkc.description')}</p>
                  <p className="text-sm"><strong>Role:</strong> {t('kumite.competition.organizations.wkc.role')}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Target className="text-purple-600" size={20} />
                    <h4 className="font-medium">{t('kumite.competition.organizations.wukf.name')}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{t('kumite.competition.organizations.wukf.description')}</p>
                  <p className="text-sm"><strong>Role:</strong> {t('kumite.competition.organizations.wukf.role')}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">{t('kumite.competition.scoring.title')}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium">{t('kumite.competition.scoring.ippon.name')}</h4>
                  <p className="text-sm text-muted-foreground">{t('kumite.competition.scoring.ippon.description')}</p>
                  <p className="text-sm"><strong>Criteria:</strong> {t('kumite.competition.scoring.ippon.criteria')}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">{t('kumite.competition.scoring.waza-ari.name')}</h4>
                  <p className="text-sm text-muted-foreground">{t('kumite.competition.scoring.waza-ari.description')}</p>
                  <p className="text-sm"><strong>Criteria:</strong> {t('kumite.competition.scoring.waza-ari.criteria')}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">{t('kumite.competition.scoring.yuko.name')}</h4>
                  <p className="text-sm text-muted-foreground">{t('kumite.competition.scoring.yuko.description')}</p>
                  <p className="text-sm"><strong>Criteria:</strong> {t('kumite.competition.scoring.yuko.criteria')}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">{t('kumite.competition.penalties.title')}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="text-yellow-600" size={16} />
                    <span className="font-medium">{t('kumite.competition.penalties.chukoku')}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="text-orange-600" size={16} />
                    <span className="font-medium">{t('kumite.competition.penalties.keikoku')}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="text-red-600" size={16} />
                    <span className="font-medium">{t('kumite.competition.penalties.hansoku')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">{t('kumite.competition.preparation.title')}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium">Physical</h4>
                  <p className="text-sm">{t('kumite.competition.preparation.physical')}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">Mental</h4>
                  <p className="text-sm">{t('kumite.competition.preparation.mental')}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">Technical</h4>
                  <p className="text-sm">{t('kumite.competition.preparation.technical')}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">Tactical</h4>
                  <p className="text-sm">{t('kumite.competition.preparation.tactical')}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Competition; 