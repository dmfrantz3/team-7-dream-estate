export interface Pledge{
    pledge_id?: number
    applicationid: number
    userid: number
    fund_amount: number
    fund_apr: number
    fund_duration: number
    maturity_date?: string
    interest_earned_ytd?: number
    interest_earned_lifetime?: number
    unclaimed_interest?: number
    claimed_interest?: number
}