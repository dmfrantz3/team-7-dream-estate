import { User } from "./user";
import { Funding } from "./funding";
import { Pledge } from "./pledge";

export interface Application{
    applicationid?: Number;
    userid?: Number;
    user?: User;
    personal_statement?: string;
    eduid?: Number
    education_level?: string;
    edu_area?: string;
    employment_status?: string;
    yearly_income?: number;
    empid?: number;
    employment_type?: string;
    employment_industry?: string;
    employment_duration?: number;
    employment_contact_name?: string;
    employment_contact_phone?: string;
    rental_late_payments?: string;
    rental_history_duration?: number;
    rental_payment_amount?: number;
    rental_mail_address?: string;
    rental_contact_name?: string;
    rental_contact_phone?: string;
    credit_score?: number;
    monthly_debt_payments?: number;
    hobbies_interests?: string;
    appstatusid?: number;
    application_status?: string;
    application_funding?: Funding;
    application_pledge_list?: Pledge[];
    application_currently_funded?: number;
    pcnt_funded?: string;
    errorMessage?: string;
}
    