export default function replaceSignsIntoOperators(expression : string) {
  return expression
    .replace(/x/g, '*')
    .replace(/‑/g, '-')
    .replace('--', '+0+0+0+0+0+0+');
}
