import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useCart } from "../Context/CartContext";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const totalDistinctItems = cartItems.length;
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
 <div className="max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto p-6 bg-white rounded-lg ">

      <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
        Cart Summary
      </h2>

      <div className="mb-6 space-y-2">
        <p className="text-gray-700 font-medium">
          Total distinct items:{" "}
          <span className="font-bold text-indigo-600">{totalDistinctItems}</span>
        </p>
        <p className="text-gray-700 font-medium">
          Total quantity:{" "}
          <span className="font-bold text-indigo-600">{totalItems}</span>
        </p>
        <p className="text-gray-700 font-medium">
          Total price:{" "}
          <span className="font-bold text-indigo-600">${totalPrice.toFixed(2)}</span>
        </p>
      </div>

      <div className="divide-y divide-gray-200">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center py-3 space-y-3 sm:space-y-0"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-16 h-16 object-cover rounded mr-0 sm:mr-4"
            />

            <div className="flex-grow">
              <p className="text-gray-900 font-semibold truncate">{item.title}</p>
              <p className="text-sm text-gray-600">
                Quantity: <span className="font-bold">{item.quantity}</span> &nbsp;|&nbsp; Price:{" "}
                <span className="font-bold">${item.price}</span>
              </p>
            </div>

            {/* Quantity Controls & Remove Button */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => decreaseQuantity(item.id)}
                disabled={item.quantity <= 1}
                className="p-1 bg-red-400 hover:bg-red-500 text-white rounded disabled:opacity-50"
                aria-label="Decrease quantity"
              >
                <FaMinus size={12} />
              </button>

              <span className="w-6 text-center font-semibold">{item.quantity}</span>

              <button
                onClick={() => increaseQuantity(item.id)}
                disabled={item.quantity >= 8}
                className="p-1 bg-green-600 hover:bg-green-700 text-white rounded disabled:opacity-50"
                aria-label="Increase quantity"
              >
                <FaPlus size={12} />
              </button>

              <button
                onClick={() => removeFromCart(item.id)}
                className="p-1 text-red-600 hover:text-red-700"
                aria-label="Remove item"
              >
                <FaTrash size={14} />
              </button>
            </div>

            {/* Total price per item */}
            <p className="sm:ml-4 text-gray-900 font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
