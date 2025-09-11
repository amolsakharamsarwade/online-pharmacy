🔹 Phase 3 – Customer Portal: Shopping Cart & Orders
Step 1: Cart Service with BehaviorSubject

Create cart.service.ts inside shared/services/

Use BehaviorSubject<CartItem[]> to store cart state

Expose cart$ observable so components can subscribe

Add methods:

addToCart(product: Product)

removeFromCart(productId: number)

clearCart()

getTotal()

Step 2: Add to Cart Button & Cart Summary

In Product List / Product Detail Component → add "Add to Cart" button

In Header Component → add Cart Icon with item count

Create a Cart Summary Component to show selected products and total price

Step 3: Checkout Form (Reactive Forms)

Create checkout.component.ts

Use Reactive Forms with fields:

Name

Address

Phone

Payment method (COD, Card)

On submit → prepare order object (cart items + user details)

Step 4: Save Orders in Backend

Create order.service.ts

Call backend /orders endpoint with order payload

Clear cart after successful order placement

Step 5: Order History Page

Create order-history.component.ts

Fetch orders from backend (/orders?userId=xxx)

Display in table (Date, Items, Amount, Status)

Angular Features Highlighted

✅ State Management: Services + RxJS (BehaviorSubject)

✅ Reactive Forms: Checkout form

✅ Observables + AsyncPipe: For cart + orders

✅ Routing: cart, checkout, orders

👉 Suggestion: We should start with Step 1 (Cart Service + Model) since it’s the backbone.

Do you want me to write the Cart model + CartService code first?

`ng g interface shared/models/cart-item --type=model`
`ng g interface shared/models/product --type=model`
