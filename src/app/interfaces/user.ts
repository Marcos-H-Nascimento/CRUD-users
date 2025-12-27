export interface User {
    name: string;
    email: string;
    sector: string;
    role: string
    firebaseId?:string | null;
    healthPlan?: string | null;
    dentalPlan?: string | null;
}
