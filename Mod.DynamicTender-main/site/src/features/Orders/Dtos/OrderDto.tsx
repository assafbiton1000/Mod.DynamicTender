export default class OrderItemDto  {
    public id!: number;
    public buildCard?: string;
    public category?: string;
    public style?: string;
    public currentActive?: any[] = [];  // Provide a default empty array
    public currentLine: any[] = [];    // Provide a default empty array
    public description?: string;
    public quantity?: number;
    public listItems!: OrderItemDto[];

    constructor(listItems: OrderItemDto[]) {
        this.listItems = listItems;
    }
}