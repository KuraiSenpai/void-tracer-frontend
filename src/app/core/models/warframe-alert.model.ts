export interface WarframeAlert { 
    guid: string;
    title: string;
    author: string;
    description: string;
    faction: string;
    publishedDate: string | Date;
    expiry: string;
}