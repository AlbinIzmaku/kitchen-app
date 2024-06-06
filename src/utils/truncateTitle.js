export function truncateTitle(title, length) {
  if (title.length > length) {
    return title.substring(0, length) + "...";
  }
  return title;
}
