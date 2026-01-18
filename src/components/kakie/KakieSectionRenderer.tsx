import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    ChevronLeft,
    Info,
    Swords,
    HeartPulse,
    Sparkles,
    ShieldAlert,
    Zap,
    Target,
    Activity,
    Dumbbell,
    Layers
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface KakieSectionRendererProps {
    sectionKey: string;
    subSectionKey?: string;
    backPath: string;
}

const KakieSectionRenderer: React.FC<KakieSectionRendererProps> = ({
    sectionKey,
    subSectionKey,
    backPath
}) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const sectionIcons: Record<string, any> = {
        'introduction': Info,
        'fighting-practice': Swords,
        'traditional-medicine': HeartPulse,
        'spiritual-influences': Sparkles,
        'close-combat': ShieldAlert,
        'kiko': Zap,
        'basic-abilities': Target,
        'techniques': Activity,
        'basic-exercises': Dumbbell,
        'points-of-attention': Layers,
    };

    const sectionColors: Record<string, string> = {
        'introduction': 'text-blue-500',
        'fighting-practice': 'text-red-500',
        'traditional-medicine': 'text-green-500',
        'spiritual-influences': 'text-purple-500',
        'close-combat': 'text-orange-500',
        'kiko': 'text-yellow-500',
        'basic-abilities': 'text-indigo-500',
        'techniques': 'text-rose-500',
        'basic-exercises': 'text-cyan-500',
        'points-of-attention': 'text-amber-500',
    };

    const IconComponent = sectionIcons[sectionKey] || Info;
    const colorClass = sectionColors[sectionKey] || 'text-primary';

    // Get content from i18n
    const baseKey = subSectionKey
        ? `kakie.sections.${sectionKey}.${subSectionKey}`
        : `kakie.sections.${sectionKey}`;

    const title = t(`${baseKey}.title`, { defaultValue: t(baseKey) });
    const subtitle = t(`${baseKey}.subtitle`, { defaultValue: subSectionKey ? '' : t(`kakie.sections.${sectionKey}.subtitle`) });
    const description = t(`${baseKey}.description`, { defaultValue: subSectionKey ? '' : t(`kakie.sections.${sectionKey}.description`) });
    const content = t(`${baseKey}.content`, { defaultValue: '' });

    const sections = [
        'introduction',
        'fighting-practice',
        'traditional-medicine',
        'spiritual-influences',
        'close-combat',
        'kiko',
        'basic-abilities',
        'techniques',
        'basic-exercises',
        'points-of-attention'
    ];

    const navigationLinks = sections.map(key => ({
        path: `/kakie/${key}`,
        label: t(`kakie.sections.${key}.title`),
        icon: sectionIcons[key] || Info,
        isActive: key === sectionKey
    }));

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b">
                <div className="flex items-center gap-4 p-4 max-w-4xl mx-auto">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => navigate(backPath)}
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <div className="flex-1 overflow-hidden">
                        <h1 className="text-lg font-bold truncate">{title}</h1>
                    </div>
                </div>

                {/* Horizontal Navigation */}
                <div className="flex gap-2 overflow-x-auto px-4 pb-3 scrollbar-hide">
                    {navigationLinks.map((link) => (
                        <Link key={link.path} to={link.path}>
                            <Badge
                                variant={link.isActive ? "default" : "secondary"}
                                className="whitespace-nowrap px-3 py-1 gap-1.5"
                            >
                                <link.icon className="h-3.5 w-3.5" />
                                {link.label}
                            </Badge>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="p-4 max-w-4xl mx-auto space-y-8 mt-4">
                {/* Title Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-2xl bg-muted ${colorClass}`}>
                            <IconComponent className="h-8 w-8" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                {subtitle || t('kakie.title')}
                            </p>
                            <h2 className="text-3xl font-extrabold leading-tight">{title}</h2>
                        </div>
                    </div>

                    {description && (
                        <p className="text-xl text-muted-foreground leading-relaxed italic border-l-4 border-muted pl-4">
                            {description}
                        </p>
                    )}
                </motion.div>

                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-p:leading-relaxed prose-p:text-muted-foreground"
                >
                    {content && content !== `kakie.sections.${sectionKey}.content` ? (
                        <div className="whitespace-pre-wrap">
                            {content}
                        </div>
                    ) : (
                        <div className="p-8 text-center bg-muted/30 rounded-3xl border-2 border-dashed border-muted">
                            <p className="text-muted-foreground mb-4">
                                {t('common.coming-soon')}
                            </p>
                            <Button variant="outline" onClick={() => navigate(backPath)}>
                                {t('common.back')}
                            </Button>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default KakieSectionRenderer;
