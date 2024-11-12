export function setBasket(id = 1) {
  const basket =
    (localStorage?.getItem("item") != null )
      ? JSON.parse(localStorage?.getItem("item"))
      : [];

  if (basket.length != 0) {
    let item = basket.filter((e: any) => {
      return e.id == id;
    });
    if (item != 0) {
      let index = basket.findIndex((i: any) => i.id == id);
      item[0].count = item[0].count + 1;
      basket[index] = item[0];
    } else {
      basket.push({ id: id, count: 1 });
    }
  } else {
    basket.push({ id: id, count: 1 });
  }
  localStorage.setItem("item", JSON.stringify(basket));
}
