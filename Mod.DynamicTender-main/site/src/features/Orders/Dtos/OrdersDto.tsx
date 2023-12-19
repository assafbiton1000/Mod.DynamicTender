import OrderItemDto from "src/features/Orders/Dtos/OrderDto";

export default class OrdersDto {



    public orderId!: number;
    public time?: string;
    public dailyNumber?: string;
    public deliveryTime?: string;
    public estimatedDeliveryTime!: string;
    public isBumpStopper?: boolean;
    public orderSource?:string;
    public timeOnMakeLine?: number ;
    public messages?:[];
    public orderItemDto!:OrderItemDto[];
    public hotAndFresh?: boolean;
    public vip?: boolean;
    public listItems!: OrdersDto[];
}



