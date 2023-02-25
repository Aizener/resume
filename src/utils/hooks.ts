/**
 * 寻找el元素下高度小于h的最后一个元素
 * @param el 指定元素
 * @param h 指定高度
 * @returns 
 */
export const useFindLastChildFn = (el: HTMLElement, h: number): HTMLElement => {
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
  return useFindLastChildFn(target, h);
}

/**
 * 函数节流
 * @param callback 回调函数 
 * @param delay 间隔
 * @returns 
 */
export const useThrottleFn = (callback: Function, delay: number, immediate = true) => {
  let timer: NodeJS.Timeout | null = null, isImmediateRun = false;
  return function (this: unknown, ...args: any) {
    if (immediate && !isImmediateRun) {
      callback.apply(this, args);
      isImmediateRun = true;
    }
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      callback.apply(this, args);
      timer = null;
    }, delay);
  }
}

/**
 * 函数防抖
 * @param callback 回调函数 
 * @param delay 间隔
 * @returns 
 */
export const useDebounceFn = (callback: Function, delay: number, immediate = true) => {
  let timer: NodeJS.Timeout | null = null, isImmediateRun = false;
  return function (this: unknown, ...args: any) {
    if (immediate && !isImmediateRun) {
      callback.apply(this, args);
      isImmediateRun = true;
    }
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback.apply(this, args);
      timer = null;
    }, delay);
  }
}