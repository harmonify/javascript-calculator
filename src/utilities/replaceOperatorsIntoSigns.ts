export default function replaceOperatorsIntoSigns(expression : string) {
  return expression
    .replace(/\*/g, 'x')
    .replace(/-/g, '‑')
    .replace('+0+0+0+0+0+0+', '‑-')
    .replace(/(x|\/|\+)‑/, '$1-')
    .replace(/^‑/, '-')
}
