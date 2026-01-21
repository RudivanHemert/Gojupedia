import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Breadcrumbs = () => {
    const location = useLocation();
    const { t } = useTranslation();

    // Don't show breadcrumbs on home page
    if (location.pathname === '/') return null;

    const pathnames = location.pathname.split('/').filter((x) => x);

    const getBreadcrumbName = (segment: string, index: number, array: string[]) => {
        // Check if it's an ID (simple check: if it contains numbers or is long and random-looking, 
        // but for now we rely on translation keys or fallback to the segment itself)
        // We can try to translate "terminology.sections.{segment}" or similar if possible, 
        // but a generic fallback is usually fine for dynamic IDs if we don't look them up.
        // Ideally, for IDs like 'age-uke', we want a readable name.

        // Try generic translation first
        const genericKey = `breadcrumbs.${segment}`;
        if (t(genericKey, { defaultValue: '' }) !== '') {
            return t(genericKey);
        }

        // Try section mapping for known routes
        // This is a bit manual but effective for a static-ish site structure
        const routeNameMap: Record<string, string> = {
            'terminology': t('terminology.title', 'Terminologie'),
            'history': t('history.title', 'Geschiedenis'),
            'philosophy': t('philosophy.title', 'Filosofie'),
            'kata': t('kata.title', 'Kata'),
            'practice': t('practice.title', 'Praktijk'),
            'study': t('study.title', 'Studie'),
            'hojo-undo': t('terminology.warmup.hojoUndo.title', 'Hojo Undo'),
            'junbi-undo': t('terminology.warmup.junbiUndo.title', 'Junbi Undo'),
            'technique': t('practice.techniques', 'Technieken'),
            'blocks': t('terminology.sections.blocks', 'Blokken'),
            'kicks': t('terminology.sections.kicks', 'Trappen'),
            'punches': t('terminology.sections.punches', 'Stoten'),
            'stances': t('terminology.sections.stances', 'Standen'),
            'strikes': t('terminology.sections.strikes', 'Slagen'),
            'kakie': t('kakie.title', 'Kakie'),
        };

        if (routeNameMap[segment]) {
            return routeNameMap[segment];
        }

        // Try Kakie section title lookup (handling nested levels)
        if (pathnames[0] === 'kakie') {
            let kakieSectionKey = '';

            if (index === 1) {
                // e.g. /kakie/close-combat -> kakie.sections.close-combat.title
                kakieSectionKey = `kakie.sections.${segment}.title`;
            } else if (index === 2) {
                // e.g. /kakie/close-combat/basic-qualities -> kakie.sections.close-combat.basic-qualities.title
                const parent = pathnames[1];
                kakieSectionKey = `kakie.sections.${parent}.${segment}.title`;
            }

            if (kakieSectionKey && t(kakieSectionKey, { defaultValue: '' }) !== '') {
                return t(kakieSectionKey);
            }
        }

        // If it looks like an ID (e.g. 'age-uke'), try to format it nicely
        // Replace hyphens with spaces and capitalize
        return segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    };

    return (
        <nav aria-label="Breadcrumb" className="w-full px-4 py-2 bg-background/50 backdrop-blur-sm border-b border-border/50 sticky top-[60px] z-20 overflow-x-auto whitespace-nowrap">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                    <Link to="/" className="hover:text-primary transition-colors flex items-center">
                        <Home className="h-4 w-4" />
                    </Link>
                </li>
                {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                    return (
                        <li key={to} className="flex items-center">
                            <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground/50" />
                            {last ? (
                                <span className="font-medium text-foreground cursor-default">
                                    {getBreadcrumbName(value, index, pathnames)}
                                </span>
                            ) : (
                                <Link to={to} className="hover:text-primary transition-colors">
                                    {getBreadcrumbName(value, index, pathnames)}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
