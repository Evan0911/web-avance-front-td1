export interface Metadata {
}

export interface AllowedVehicleType {
    type: string;
    value: string[];
    metadata: Metadata;
}

export interface Timestamp {
    type: string;
    value: Date;
}

export interface Metadata2 {
    timestamp: Timestamp;
}

export interface AvailableSpotNumber {
    type: string;
    value: number;
    metadata: Metadata2;
}

export interface Metadata3 {
}

export interface Category {
    type: string;
    value: string[];
    metadata: Metadata3;
}

export interface Metadata4 {
}

export interface Layout {
    type: string;
    value: string[];
    metadata: Metadata4;
}

export interface Value {
    type: string;
    coordinates: number[];
}

export interface Metadata5 {
}

export interface Location {
    type: string;
    value: Value;
    metadata: Metadata5;
}

export interface Metadata6 {
}

export interface Name {
    type: string;
    value: string;
    metadata: Metadata6;
}

export interface Metadata7 {
}

export interface RequiredPermit {
    type: string;
    value: string;
    metadata: Metadata7;
}

export interface Timestamp2 {
    type: string;
    value: Date;
}

export interface Metadata8 {
    timestamp: Timestamp2;
}

export interface Status {
    type: string;
    value: string;
    metadata: Metadata8;
}

export interface Metadata9 {
}

export interface TotalSpotNumber {
    type: string;
    value: number;
    metadata: Metadata9;
}

export interface Spot {
    id: string;
    type: string;
    allowedVehicleType: AllowedVehicleType;
    availableSpotNumber: AvailableSpotNumber;
    category: Category;
    layout: Layout;
    location: Location;
    name: Name;
    requiredPermit: RequiredPermit;
    status: Status;
    totalSpotNumber: TotalSpotNumber;
}