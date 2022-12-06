export interface Funding{
    application_id: number;
    risk_score: number;
    risk_category: string;
    funding_required: number;
    funding_start: string;
    funding_end: string;
    formatted_funding_end?: string;
}