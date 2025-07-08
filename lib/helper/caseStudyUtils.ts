// utils/caseStudyUtils.ts

import { CaseStudyItem } from "@/types/PropsTypes";
import { caseStudyData } from "../data/caseStudyData";


/**
 * Get all case study slugs for static generation
 */
export const getAllCaseStudySlugs = (): string[] => {
    return caseStudyData.map(study => study.slug);
};

/**
 * Get case study by slug
 */
export const getCaseStudyBySlug = (slug: string): CaseStudyItem | undefined => {
    return caseStudyData.find(study => study.slug === slug);
};

/**
 * Get all case studies
 */
export const getAllCaseStudies = (): CaseStudyItem[] => {
    return caseStudyData;
};

/**
 * Get featured case studies (first 3)
 */
export const getFeaturedCaseStudies = (): CaseStudyItem[] => {
    return caseStudyData.slice(0, 3);
};

/**
 * Get related case studies (exclude current one)
 */
export const getRelatedCaseStudies = (currentSlug: string, limit: number = 2): CaseStudyItem[] => {
    return caseStudyData
        .filter(study => study.slug !== currentSlug)
        .slice(0, limit);
};

/**
 * Generate case study metadata for SEO
 */
export const generateCaseStudyMetadata = (slug: string) => {
    const caseStudy = getCaseStudyBySlug(slug);
    
    if (!caseStudy) {
        return {
            title: 'Case Study Not Found',
            description: 'The requested case study could not be found.',
        };
    }

    return {
        title: `${caseStudy.title} | iTCart Case Study`,
        description: caseStudy.description,
        openGraph: {
            title: caseStudy.title,
            description: caseStudy.description,
            images: [
                {
                    url: caseStudy.bannerImage,
                    width: 1200,
                    height: 630,
                    alt: caseStudy.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: caseStudy.title,
            description: caseStudy.description,
            images: [caseStudy.bannerImage],
        },
    };
};