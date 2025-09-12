export interface Order {
  id: number;
  customer: any;          // you can later create a proper Customer model
  items: any[];           // array of products in the cart
  total: number;
  date: Date;
  status: 'Pending' | 'Shipped' | 'Delivered';
}
