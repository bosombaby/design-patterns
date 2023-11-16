function getPhone({
  size,
  type = "iOS",
  screen = "OLED",
  price = 100,
  discount,
} = {}) {
  console.log("size", size);
  console.log("type", type);
  console.log("screen", screen);
  console.log("price", price);
  console.log("discount", discount);
}

getPhone({ size: 4, discount: 0.1, type: "android" }); // 只需要传递需要的参数
