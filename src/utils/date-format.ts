export function getTodayDate() {
  return new Intl.DateTimeFormat('pt-br').format(new Date())
}
