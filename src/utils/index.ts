/**
 * 寻找el元素下高度小于h的最后一个元素
 * @param el 指定元素
 * @param h 指定高度
 * @returns 
 */
export const findLastChild = (el: HTMLElement, h: number): HTMLElement => {
  const cns = el.childNodes as NodeListOf<any>;
  let target = null;
  for (let i = 0 ; i < cns.length ; i ++) {
    if (cns[i].offsetTop + cns[i].offsetHeight >= h) {
      target = cns[i];
      break;
    }
  }
  if (target === null) {
    return el;
  }
  return findLastChild(target, h);
}
