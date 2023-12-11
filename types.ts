// types.ts

export interface Project {
    name: string;
    shortInfo: string;
    status: string;
    description: string;
    header_img_path: string;
    slug: string;
    tag: string[];
    website: string;
    year: string;
    integration_url: string;
    twitter: string;
    telegram: string;
    discord: string;
    youtube: string;
    github: string;
    img_path: string;
    type: string;
    integrationTitle: string;
}

export interface Tag {
    name: string;
    description: string;
}

