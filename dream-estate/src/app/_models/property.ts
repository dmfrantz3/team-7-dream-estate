import { Address } from "./address";
import { Features } from "./features";
export interface Property {
    propid: number;
    addrid: number;
    propvalue: number;
    totalshares: number;
    description: string;
    address: Address;
    propfeatureimg: string;
    features?: Features[];
}
