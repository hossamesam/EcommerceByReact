export function setFavorite(id = 1) {
  const MyFavorite =
    localStorage?.getItem("favorite") != null
      ? (JSON.parse(localStorage?.getItem("favorite") as string) as Array<{
          id: number;
        }>)
      : [];
  const exists = MyFavorite.some((item) => item.id === id);

  if (!exists) {
    MyFavorite.push({ id });
    localStorage.setItem("favorite", JSON.stringify(MyFavorite));
  }
}
