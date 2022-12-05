import { Role } from "./role";
import { Pledge } from "./pledge";
export interface User {
    userid?: number;
    roles?: Role[];
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
    pledgeList?: Pledge[];
}
