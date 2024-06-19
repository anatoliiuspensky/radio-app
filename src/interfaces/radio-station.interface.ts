export interface IRadioStation {
    id: string;
    description: string;
    name: string;
    imgUrl: string;
    streamUrl: string;
    reliability: number;
    popularity?: number;  // Optional because it is missing in one object
    tags: string[];
}