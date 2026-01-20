import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TheoryHeader from '@/components/theory/TheoryHeader';
import { Card, CardContent } from '@/components/ui/card';
import {
    Info,
    Swords,
    HeartPulse,
    Sparkles,
    ShieldAlert,
    Zap,
    Target,
    Dumbbell,
    Activity,
    ChevronRight,
    Layers
} from 'lucide-react';

const KakiePage = () => {
    const { t } = useTranslation();

    const sections = [
        {
            id: 'introduction',
            title: t('kakie.sections.introduction.title'),
            icon: <Info className="h-5 w-5 text-blue-500" />,
            path: '/kakie/introduction'
        },
        {
            id: 'fighting-practice',
            title: t('kakie.sections.fighting-practice.title'),
            icon: <Swords className="h-5 w-5 text-red-500" />,
            path: '/kakie/fighting-practice'
        },
        {
            id: 'traditional-medicine',
            title: t('kakie.sections.traditional-medicine.title'),
            icon: <HeartPulse className="h-5 w-5 text-green-500" />,
            path: '/kakie/traditional-medicine'
        },
        {
            id: 'spiritual-influences',
            title: t('kakie.sections.spiritual-influences.title'),
            icon: <Sparkles className="h-5 w-5 text-purple-500" />,
            path: '/kakie/spiritual-influences'
        },
        {
            id: 'close-combat',
            title: t('kakie.sections.close-combat.title'),
            icon: <ShieldAlert className="h-5 w-5 text-orange-500" />,
            subsections: [
                { id: 'basic-qualities', title: t('kakie.sections.close-combat.basic-qualities.title'), path: '/kakie/close-combat/basic-qualities' },
                { id: 'chiru-nu-chan-chan', title: t('kakie.sections.close-combat.chiru-nu-chan-chan.title'), path: '/kakie/close-combat/chiru-nu-chan-chan' },
                { id: 'body-conditioning', title: t('kakie.sections.close-combat.body-conditioning.title'), path: '/kakie/close-combat/body-conditioning' },
                { id: 'sanchin', title: t('kakie.sections.close-combat.sanchin.title'), path: '/kakie/close-combat/sanchin' }
            ]
        },
        {
            id: 'kiko',
            title: t('kakie.sections.kiko.title'),
            icon: <Zap className="h-5 w-5 text-yellow-500" />,
            subsections: [
                { id: 'mind-projection', title: t('kakie.sections.kiko.mind-projection.title'), path: '/kakie/kiko/mind-projection' },
                { id: 'sensitivity', title: t('kakie.sections.kiko.sensitivity.title'), path: '/kakie/kiko/sensitivity' },
                { id: 'muscular-tension', title: t('kakie.sections.kiko.muscular-tension.title'), path: '/kakie/kiko/muscular-tension' },
                { id: 'regulating-breathing', title: t('kakie.sections.kiko.regulating-breathing.title'), path: '/kakie/kiko/regulating-breathing' },
                { id: 'tension-relaxation', title: t('kakie.sections.kiko.tension-relaxation.title'), path: '/kakie/kiko/tension-relaxation' }
            ]
        },
        {
            id: 'basic-abilities',
            title: t('kakie.sections.basic-abilities.title'),
            icon: <Target className="h-5 w-5 text-indigo-500" />,
            subsections: [
                { id: 'control-absorb-deflect-evade', title: t('kakie.sections.basic-abilities.control-absorb-deflect-evade.title'), path: '/kakie/basic-abilities/control-absorb-deflect-evade' },
                { id: 'control-muchimi', title: t('kakie.sections.basic-abilities.control-muchimi.title'), path: '/kakie/basic-abilities/control-muchimi' },
                { id: 'absorb', title: t('kakie.sections.basic-abilities.absorb.title'), path: '/kakie/basic-abilities/absorb' },
                { id: 'deflection', title: t('kakie.sections.basic-abilities.deflection.title'), path: '/kakie/basic-abilities/deflection' },
                { id: 'evasion', title: t('kakie.sections.basic-abilities.evasion.title'), path: '/kakie/basic-abilities/evasion' }
            ]
        },
        {
            id: 'techniques',
            title: t('kakie.sections.techniques.title'),
            icon: <Activity className="h-5 w-5 text-rose-500" />,
            subsections: [
                { id: 'grabbing', title: t('kakie.sections.techniques.grabbing.title'), path: '/kakie/techniques/grabbing' },
                { id: 'opening-closing', title: t('kakie.sections.techniques.opening-closing.title'), path: '/kakie/techniques/opening-closing' },
                { id: 'pushing-pulling', title: t('kakie.sections.techniques.pushing-pulling.title'), path: '/kakie/techniques/pushing-pulling' },
                { id: 'go-techniques', title: t('kakie.sections.techniques.go-techniques.title'), path: '/kakie/techniques/go-techniques' },
                { id: 'ju-techniques-tuite', title: t('kakie.sections.techniques.ju-techniques-tuite.title'), path: '/kakie/techniques/ju-techniques-tuite' },
                { id: 'ju-techniques-kyusho', title: t('kakie.sections.techniques.ju-techniques-kyusho.title'), path: '/kakie/techniques/ju-techniques-kyusho' }
            ]
        },
        {
            id: 'basic-exercises',
            title: t('kakie.sections.basic-exercises.title'),
            icon: <Dumbbell className="h-5 w-5 text-cyan-500" />,
            subsections: [
                { id: 'swallow-spit', title: t('kakie.sections.basic-exercises.swallow-spit.title'), path: '/kakie/basic-exercises/swallow-spit' },
                { id: 'circle-deflect', title: t('kakie.sections.basic-exercises.circle-deflect.title'), path: '/kakie/basic-exercises/circle-deflect' },
                { id: 'kake-uke', title: t('kakie.sections.basic-exercises.kake-uke.title'), path: '/kakie/basic-exercises/kake-uke' }
            ]
        },
        {
            id: 'points-of-attention',
            title: t('kakie.sections.points-of-attention.title'),
            icon: <Layers className="h-5 w-5 text-amber-500" />,
            subsections: [
                { id: 'posture', title: t('kakie.sections.points-of-attention.posture.title'), path: '/kakie/points-of-attention/posture' },
                { id: 'grounding', title: t('kakie.sections.points-of-attention.grounding.title'), path: '/kakie/points-of-attention/grounding' },
                { id: 'rooting', title: t('kakie.sections.points-of-attention.rooting.title'), path: '/kakie/points-of-attention/rooting' },
                { id: 'centring', title: t('kakie.sections.points-of-attention.centring.title'), path: '/kakie/points-of-attention/centring' },
                { id: 'generating-power', title: t('kakie.sections.points-of-attention.generating-power.title'), path: '/kakie/points-of-attention/generating-power' },
                { id: 'combining-forces', title: t('kakie.sections.points-of-attention.combining-forces.title'), path: '/kakie/points-of-attention/combining-forces' },
                { id: 'regulating-breathing', title: t('kakie.sections.points-of-attention.regulating-breathing.title'), path: '/kakie/points-of-attention/regulating-breathing' },
                { id: 'regulating-ki', title: t('kakie.sections.points-of-attention.regulating-ki.title'), path: '/kakie/points-of-attention/regulating-ki' }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
            }
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <TheoryHeader
                title={t('kakie.title')}
                description={t('kakie.description')}
                backUrl="/practice"
            />
            <div className="p-4 w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-2"
                >
                    {sections.map((section) => (
                        <motion.div key={section.id} variants={itemVariants}>
                            <Card className="h-full border-2 hover:shadow-md transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-full bg-muted">
                                            {section.icon}
                                        </div>
                                        <h2 className="text-xl font-bold">{section.title}</h2>
                                    </div>

                                    {section.subsections ? (
                                        <div className="space-y-2">
                                            {section.subsections.map((sub) => (
                                                <Link
                                                    key={sub.id}
                                                    to={sub.path}
                                                    className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors group"
                                                >
                                                    <span className="font-medium text-sm md:text-base">{sub.title}</span>
                                                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                                </Link>
                                            ))}
                                        </div>
                                    ) : (
                                        <Link
                                            to={section.path || '#'}
                                            className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors group"
                                        >
                                            <span className="font-medium text-sm md:text-base">{section.title}</span>
                                            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </Link>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default KakiePage;
