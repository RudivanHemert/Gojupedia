import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Lazy imports for Pages
const Index = lazy(() => import('@/pages/Index'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const TheoryPage = lazy(() => import('@/pages/TheoryPage'));
const TerminologyPage = lazy(() => import('@/pages/TerminologyPage'));
const HistoryPage = lazy(() => import('@/pages/HistoryPage'));
const VitalPointsPage = lazy(() => import('@/pages/VitalPointsPage'));
const PracticePage = lazy(() => import('@/pages/PracticePage'));
const TechniquesPage = lazy(() => import('@/pages/TechniquesPage'));
const TechniqueDetailPage = lazy(() => import('@/pages/TechniqueDetailPage'));
const KataPage = lazy(() => import('@/pages/KataPage'));
const KataDetailPage = lazy(() => import('@/pages/KataDetailPage'));
const KataTheoryPage = lazy(() => import('@/pages/KataTheoryPage'));
const KataTheoryDetailPage = lazy(() => import('@/pages/theory/kata/KataTheoryDetailPage'));
const BunkaiPage = lazy(() => import('@/pages/BunkaiPage'));
const BunkaiDetailPage = lazy(() => import('@/pages/BunkaiDetailPage'));
const HojoUndoPage = lazy(() => import('@/pages/HojoUndoPage'));
const NewazaPage = lazy(() => import('@/pages/NewazaPage'));
const KumitePage = lazy(() => import('@/pages/KumitePage'));
const KumiteIntroduction = lazy(() => import('@/pages/kumite/Introduction'));
const KumiteTechniques = lazy(() => import('@/pages/kumite/Techniques'));
const KumitePrinciples = lazy(() => import('@/pages/kumite/Principles'));
const KumiteTraining = lazy(() => import('@/pages/kumite/Training'));
const KumiteCompetition = lazy(() => import('@/pages/kumite/Competition'));
const StudyPage = lazy(() => import('@/pages/StudyPage'));
const StudyDetailPage = lazy(() => import('@/pages/StudyDetailPage'));
const GradingsPage = lazy(() => import('@/pages/GradingsPage'));
const SettingsPage = lazy(() => import('@/pages/SettingsPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const SearchPage = lazy(() => import('@/pages/SearchPage'));
const JunbiUndoPage = lazy(() => import('@/pages/JunbiUndoPage'));
const HojoUndoSectionPage = lazy(() => import('@/pages/HojoUndoSectionPage'));
const PhilosophyPage = lazy(() => import('@/pages/PhilosophyPage'));
const DojoKun = lazy(() => import('@/pages/philosophy/DojoKun'));
const GojuRyu = lazy(() => import('@/pages/philosophy/GojuRyu'));
const KarateDo = lazy(() => import('@/pages/philosophy/KarateDo'));
const MindBody = lazy(() => import('@/pages/philosophy/MindBody'));
const Respect = lazy(() => import('@/pages/philosophy/Respect'));
const KakiePage = lazy(() => import('@/pages/KakiePage'));
const KakieSectionPage = lazy(() => import('@/pages/KakieSectionPage'));

// History Sections
const OriginsSection = lazy(() => import('@/components/history/OriginsSection'));
const KanryoHigaonnaSection = lazy(() => import('@/components/history/KanryoHigaonnaSection'));
const ChojunMiyagiSection = lazy(() => import('@/components/history/ChojunMiyagiSection'));
const AnichiMiyagiSection = lazy(() => import('@/components/history/AnichiMiyagiSection'));
const MorioHigaonnaSection = lazy(() => import('@/components/history/MorioHigaonnaSection'));
const TetsujiNakamuraSection = lazy(() => import('@/components/history/TetsujiNakamuraSection'));
const TimelineSection = lazy(() => import('@/components/history/TimelineSection'));

// Hojo Undo Pages
const GeneralIntro = lazy(() => import('@/pages/hojo-undo/GeneralIntro'));
const StrengthExercises = lazy(() => import('@/pages/hojo-undo/StrengthExercises'));
const HardeningExercises = lazy(() => import('@/pages/hojo-undo/HardeningExercises'));

// Newaza Sub-pages
const NewazaIntroduction = lazy(() => import('@/pages/newaza/Introduction'));
const NewazaTrainingElements = lazy(() => import('@/pages/newaza/TrainingElements'));
const NewazaGroundPositions = lazy(() => import('@/pages/newaza/GroundPositions'));
const NewazaKakie = lazy(() => import('@/pages/newaza/Kakie'));
const NewazaTechniques = lazy(() => import('@/pages/newaza/Techniques'));
const NewazaDrills = lazy(() => import('@/pages/newaza/Drills'));

// Information Pages
const InformationPage = lazy(() => import('@/pages/InformationPage'));
const EventsPage = lazy(() => import('@/pages/information/EventsPage'));
const DojosPage = lazy(() => import('@/pages/information/DojosPage'));

// Study List Pages
const QuizListPage = lazy(() => import('@/pages/study/QuizListPage'));
const FlashcardListPage = lazy(() => import('@/pages/study/FlashcardListPage'));
const MatchingListPage = lazy(() => import('@/pages/study/MatchingListPage'));

// Ude Tanren Exercises
const SwingingArmDrill = lazy(() => import('@/pages/hojo-undo/ude-tanren/exercises/SwingingArmDrill'));
const SteppingBlockingDrill = lazy(() => import('@/pages/hojo-undo/ude-tanren/exercises/SteppingBlockingDrill'));
const IpponUkeBarai = lazy(() => import('@/pages/hojo-undo/ude-tanren/exercises/IpponUkeBarai'));
const SandanUkeBarai = lazy(() => import('@/pages/hojo-undo/ude-tanren/exercises/SandanUkeBarai'));
const WristRotation = lazy(() => import('@/pages/hojo-undo/ude-tanren/exercises/WristRotation'));

// Terminology Sub-pages
const Stances = lazy(() => import('@/pages/terminology/Stances'));
const Kicks = lazy(() => import('@/pages/terminology/Kicks'));
const Punches = lazy(() => import('@/pages/terminology/Punches'));
const Blocks = lazy(() => import('@/pages/terminology/Blocks'));
const Strikes = lazy(() => import('@/pages/terminology/Strikes'));
const Warmup = lazy(() => import('@/pages/terminology/Warmup'));
const GeneralTerminology = lazy(() => import('@/pages/terminology/GeneralTerminology'));
const Numbers = lazy(() => import('@/pages/terminology/Numbers'));
const TournamentTerminology = lazy(() => import('@/pages/terminology/TournamentTerminology'));
const EquipmentAndWeapons = lazy(() => import('@/pages/terminology/EquipmentAndWeapons'));
const KarateGojuRyuTerminology = lazy(() => import('@/pages/terminology/KarateGojuRyuTerminology'));
const KarateTitles = lazy(() => import('@/pages/terminology/KarateTitles'));
const PhrasesAndEtiquette = lazy(() => import('@/pages/terminology/PhrasesAndEtiquette'));
const KataTerminology = lazy(() => import('@/pages/terminology/KataTerminology'));

// Kumite Sub-pages
const WhatIsKumite = lazy(() => import('@/pages/kumite/introduction/WhatIsKumite'));
const TypesOfKumite = lazy(() => import('@/pages/kumite/introduction/TypesOfKumite'));
const SafetyAndRules = lazy(() => import('@/pages/kumite/introduction/SafetyAndRules'));
const AttackTechniques = lazy(() => import('@/pages/kumite/techniques/AttackTechniques'));
const DefenseTechniques = lazy(() => import('@/pages/kumite/techniques/DefenseTechniques'));
const ThrowingTechniques = lazy(() => import('@/pages/kumite/techniques/ThrowingTechniques'));

import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

// ... (keep lazy imports)

const AppRoutes = () => {
    const location = useLocation();
    const prevLocationRef = useRef(location);
    const prevDepth = useRef(location.pathname.split('/').filter(Boolean).length);

    useEffect(() => {
        prevLocationRef.current = location;
        prevDepth.current = location.pathname.split('/').filter(Boolean).length;
    }, [location]);

    const getDirection = () => {
        const currentDepth = location.pathname.split('/').filter(Boolean).length;
        const previousDepth = prevDepth.current;

        if (currentDepth > previousDepth) return 1; // Pushing (Go deeper)
        if (currentDepth < previousDepth) return -1; // Popping (Go back)
        return 0; // Same level (Fade)
    };

    const direction = getDirection();

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : direction < 0 ? -50 : 0,
            opacity: 0,
            scale: 0.98
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 50 : direction > 0 ? -50 : 0,
            opacity: 0,
            scale: 0.98
        })
    };

    return (
        <AnimatePresence mode="wait" custom={direction}>
            <motion.div
                key={location.pathname}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, type: 'tween', ease: 'easeOut' }}
                className="w-full h-full"
            >
                <Routes location={location}>
                    <Route path="/" element={<Index />} />
                    <Route path="/theory" element={<TheoryPage />} />
                    <Route path="/terminology" element={<TerminologyPage />} />
                    <Route path="/terminology/stances" element={<Stances />} />
                    <Route path="/terminology/stances/:stanceId" element={<Stances />} />
                    <Route path="/terminology/kicks" element={<Kicks />} />
                    <Route path="/terminology/kicks/:kickId" element={<Kicks />} />
                    <Route path="/terminology/punches" element={<Punches />} />
                    <Route path="/terminology/punches/:punchId" element={<Punches />} />
                    <Route path="/terminology/blocks" element={<Blocks />} />
                    <Route path="/terminology/blocks/:blockId" element={<Blocks />} />
                    <Route path="/terminology/strikes" element={<Strikes />} />
                    <Route path="/terminology/strikes/:strikeId" element={<Strikes />} />
                    <Route path="/terminology/warmup" element={<Warmup />} />
                    <Route path="/terminology/warmup/:warmupId" element={<Warmup />} />
                    <Route path="/terminology/general-terms" element={<GeneralTerminology />} />
                    <Route path="/terminology/numbers" element={<Numbers />} />
                    <Route path="/terminology/tournament-terms" element={<TournamentTerminology />} />
                    <Route path="/terminology/equipment-weapons" element={<EquipmentAndWeapons />} />
                    <Route path="/terminology/karate-goju-ryu" element={<KarateGojuRyuTerminology />} />
                    <Route path="/terminology/karate-titles" element={<KarateTitles />} />
                    <Route path="/terminology/phrases-etiquette" element={<PhrasesAndEtiquette />} />
                    <Route path="/terminology/kata-terms" element={<KataTerminology />} />
                    <Route path="/history" element={<HistoryPage />} />
                    <Route path="/history/origins" element={<OriginsSection />} />
                    <Route path="/history/kanryo-higaonna" element={<KanryoHigaonnaSection />} />
                    <Route path="/history/chojun-miyagi" element={<ChojunMiyagiSection />} />
                    <Route path="/history/anichi-miyagi" element={<AnichiMiyagiSection />} />
                    <Route path="/history/morio-higaonna" element={<MorioHigaonnaSection />} />
                    <Route path="/history/tetsuji-nakamura" element={<TetsujiNakamuraSection />} />
                    <Route path="/history/timeline" element={<TimelineSection />} />
                    <Route path="/philosophy" element={<PhilosophyPage />} />
                    <Route path="/philosophy/dojo-kun" element={<DojoKun />} />
                    <Route path="/philosophy/goju-ryu" element={<GojuRyu />} />
                    <Route path="/philosophy/karate-do" element={<KarateDo />} />
                    <Route path="/philosophy/mind-body" element={<MindBody />} />
                    <Route path="/philosophy/respect" element={<Respect />} />
                    <Route path="/vital-points" element={<VitalPointsPage />} />
                    <Route path="/theory/kata" element={<KataTheoryPage />} />
                    <Route path="/theory/kata/:id" element={<KataTheoryDetailPage />} />
                    <Route path="/practice" element={<PracticePage />} />
                    <Route path="/techniques" element={<TechniquesPage />} />
                    <Route path="/techniques/:id" element={<TechniqueDetailPage />} />
                    <Route path="/kata" element={<KataPage />} />
                    <Route path="/kata/:id" element={<KataDetailPage />} />
                    <Route path="/bunkai" element={<BunkaiPage />} />
                    <Route path="/bunkai/:id" element={<BunkaiDetailPage />} />
                    <Route path="/hojo-undo" element={<HojoUndoPage />} />
                    <Route path="/hojo-undo/general/intro" element={<GeneralIntro />} />
                    <Route path="/hojo-undo/general/strength" element={<StrengthExercises />} />
                    <Route path="/hojo-undo/general/hardening" element={<HardeningExercises />} />
                    <Route path="/hojo-undo/ude-tanren/exercises/swinging-arm-drill" element={<SwingingArmDrill />} />
                    <Route path="/hojo-undo/ude-tanren/exercises/stepping-blocking-drill" element={<SteppingBlockingDrill />} />
                    <Route path="/hojo-undo/ude-tanren/exercises/ippon-uke-barai" element={<IpponUkeBarai />} />
                    <Route path="/hojo-undo/ude-tanren/exercises/sandan-uke-barai" element={<SandanUkeBarai />} />
                    <Route path="/hojo-undo/ude-tanren/exercises/wrist-rotation" element={<WristRotation />} />
                    <Route path="/hojo-undo/:equipmentId/:sectionKey" element={<HojoUndoSectionPage />} />
                    <Route path="/newaza" element={<NewazaPage />} />
                    <Route path="/newaza/introduction" element={<NewazaIntroduction />} />
                    <Route path="/newaza/training-elements" element={<NewazaTrainingElements />} />
                    <Route path="/newaza/ground-positions" element={<NewazaGroundPositions />} />
                    <Route path="/newaza/kakie" element={<NewazaKakie />} />
                    <Route path="/newaza/techniques" element={<NewazaTechniques />} />
                    <Route path="/newaza/drills" element={<NewazaDrills />} />
                    <Route path="/kumite" element={<KumitePage />} />
                    <Route path="/kumite/introduction" element={<KumiteIntroduction />} />
                    <Route path="/kumite/techniques" element={<KumiteTechniques />} />
                    <Route path="/kumite/principles" element={<KumitePrinciples />} />
                    <Route path="/kumite/training" element={<KumiteTraining />} />
                    <Route path="/kumite/competition" element={<KumiteCompetition />} />
                    <Route path="/kumite/introduction/what-is" element={<WhatIsKumite />} />
                    <Route path="/kumite/introduction/types" element={<TypesOfKumite />} />
                    <Route path="/kumite/introduction/safety" element={<SafetyAndRules />} />
                    <Route path="/kumite/techniques/attack" element={<AttackTechniques />} />
                    <Route path="/kumite/techniques/defense" element={<DefenseTechniques />} />
                    <Route path="/kumite/techniques/throwing" element={<ThrowingTechniques />} />
                    <Route path="/study" element={<StudyPage />} />
                    <Route path="/study/quizzes" element={<QuizListPage />} />
                    <Route path="/study/flashcards" element={<FlashcardListPage />} />
                    <Route path="/study/matching" element={<MatchingListPage />} />
                    <Route path="/study/:id" element={<StudyDetailPage />} />
                    <Route path="/gradings" element={<GradingsPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/junbi-undo" element={<JunbiUndoPage />} />
                    <Route path="/kakie" element={<KakiePage />} />
                    <Route path="/kakie/:sectionId" element={<KakieSectionPage />} />
                    <Route path="/kakie/:sectionId/:subSectionId" element={<KakieSectionPage />} />

                    {/* Information Routes */}
                    <Route path="/information" element={<InformationPage />} />
                    <Route path="/information/events" element={<EventsPage />} />
                    <Route path="/information/dojos" element={<DojosPage />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </motion.div>
        </AnimatePresence>
    );
};

export default AppRoutes;
