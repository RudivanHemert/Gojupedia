import React from 'react';
import { useParams } from 'react-router-dom';
import KakieSectionRenderer from '@/components/kakie/KakieSectionRenderer';

const KakieSectionPage = () => {
    const { sectionId, subSectionId } = useParams();

    // Validate sectionId
    const validSections = [
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

    const sectionKey = (sectionId && validSections.includes(sectionId)) ? sectionId : 'introduction';

    return (
        <KakieSectionRenderer
            sectionKey={sectionKey}
            subSectionKey={subSectionId}
            backPath="/kakie"
        />
    );
};

export default KakieSectionPage;
