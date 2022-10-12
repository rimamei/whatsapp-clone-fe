export function ellipsis(text: string) {
  if (text.length > 15) {
    return text.substring(0, 14).concat('...');
  }
}
