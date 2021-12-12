import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "order name required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    userid: {
      type: String,
    },
    orderItems: [],
    shippingAddress: {
      type: Object,
    },
    orderAmount: {
      type: String,
    },
    isDeliverd: {
      type: Boolean,
      default: false,
    },
    transactionId: {
      type: String,
    },
  },
  { timestamps: true }
);

const orderModel = mongoose.model("order", orderSchema);

export default orderModel;
