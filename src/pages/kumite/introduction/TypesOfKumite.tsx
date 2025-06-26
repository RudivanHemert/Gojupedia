import React from 'react';
import { useTranslation } from 'react-i18next';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Shield, Target, Users, Clock, Trophy, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import { useMarkdownContent } from '@/utils/markdown';
import { useLanguage } from '@/contexts/LanguageContext';

const kumiteTypes = [
  {
    id: 'ippon',
    icon: Shield,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    difficulty: 1,
    level: 'Beginner'
  },
  {
    id: 'sanbon',
    icon: Target,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    difficulty: 2,
    level: 'Intermediate'
  },
  {
    id: 'gohon',
    icon: Users,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    difficulty: 3,
    level: 'Advanced'
  },
  {
    id: 'jiyu',
    icon: Clock,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    difficulty: 4,
    level: 'Expert'
  },
  {
    id: 'shiai',
    icon: Trophy,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    difficulty: 5,
    level: 'Competition'
  }
];

const TypesOfKumite = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const content = useMarkdownContent(`kumite/introduction/types-of-kumite.${language}`) || useMarkdownContent('kumite/introduction/types-of-kumite.en');

  return (
    <div className="min-h-screen bg-white">
      <TheoryHeader 
        title={t('kumite.introduction.types-title')}
        description={t('kumite.introduction.types-desc')}
        backUrl="/kumite"
      />
      <div className="p-4 max-w-4xl mx-auto space-y-8">
        {/* Table of Contents */}
        <nav className="mb-6">
          <ul className="flex flex-wrap gap-4 text-sm text-primary font-medium">
            <li><a href="#kumite-types">{t('kumite.introduction.kumite-types')}</a></li>
            <li><a href="#progression">{t('kumite.introduction.progression')}</a></li>
            <li><a href="#safety">{t('kumite.introduction.safety')}</a></li>
          </ul>
        </nav>

        {/* Kumite Types Grid */}
        <section id="kumite-types">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kumiteTypes.map((type) => (
              <Card key={type.id} className={`p-6 border-2 ${type.borderColor} hover:shadow-lg transition-shadow`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${type.bgColor}`}>
                    <type.icon className={`${type.color}`} size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{t(`kumite.introduction.types.${type.id}.title`)}</h3>
                    <Badge variant="secondary" className="text-xs">{type.level}</Badge>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {t(`kumite.introduction.types.${type.id}.description`)}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm mb-2">{t('kumite.introduction.goals')}</h4>
                    <ul className="space-y-1">
                      {['goal1', 'goal2', 'goal3'].map(goal => (
                        <li key={goal} className="flex items-center gap-2 text-xs">
                          <CheckCircle className="text-green-600" size={14} />
                          <span>{t(`kumite.introduction.types.${type.id}.goals.${goal}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm mb-2">{t('kumite.introduction.characteristics')}</h4>
                    <ul className="space-y-1">
                      {['char1', 'char2', 'char3'].map(char => (
                        <li key={char} className="flex items-center gap-2 text-xs">
                          <ArrowRight className="text-blue-600" size={14} />
                          <span>{t(`kumite.introduction.types.${type.id}.characteristics.${char}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                    <span>Difficulty</span>
                    <span>{type.difficulty}/5</span>
                  </div>
                  <Progress value={type.difficulty * 20} className="h-2" />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Training Progression */}
        <section id="progression">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">{t('kumite.introduction.progression')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {['basic', 'expansion', 'freedom', 'competition'].map((stage, index) => (
                <div key={stage} className="text-center">
                  <div className="relative">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-semibold">
                      {index + 1}
                    </div>
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gray-300 transform translate-x-2"></div>
                    )}
                  </div>
                  <h3 className="font-semibold mb-1">{t(`kumite.introduction.progression.${stage}.title`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`kumite.introduction.progression.${stage}.desc`)}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Safety Information */}
        <section id="safety">
          <Card className="p-6 border-l-4 border-l-red-500">
            <div className="flex items-start gap-4">
              <AlertTriangle className="text-red-600 mt-1" size={32} />
              <div>
                <h2 className="text-xl font-semibold mb-3">{t('kumite.introduction.safety')}</h2>
                <p className="text-muted-foreground mb-4">
                  {t('kumite.introduction.safety-desc')}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {['control', 'equipment', 'supervision', 'respect'].map(item => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className="text-red-600" size={20} />
                      <span className="text-sm">{t(`kumite.introduction.safety.principles.${item}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default TypesOfKumite; 