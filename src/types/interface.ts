import { CompanyScale } from "./enum";

export interface Job {
    id: number;
    name: string;
    company: Company;
    salary: string;
    city: string;
    address: string;
    description: string;
    tags: string[];
    comments: Comment[];
}

export interface Company {
    id: number;
    name: string;
    logo: string;
    industry: string;
    description: string;
    address: string;
    tel: string;
    scale: CompanyScale;
}

export interface Comment {
    id: number;
    author: string;
    content: string;
    addTime: string;
}
