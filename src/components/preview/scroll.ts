import { useThrottleFn } from '@/utils/hooks';

let showPageTimer: NodeJS.Timeout | null = null;

export let currPage = $ref<number>(1);
export let isShowPage = $ref<boolean>(false);
export const doScroll = (cvsArr: Ref<HTMLCanvasElement[]>) => {
  return useThrottleFn((e: Event) => {
    isShowPage = true;
    showPageTimer && clearTimeout(showPageTimer);
    const scrollTop = (e.target as HTMLElement).scrollTop;
    for (let i = 0 ; i < cvsArr.value.length ; i ++) {
      const { offsetTop: top, offsetHeight: height } = cvsArr.value[i];
      if (scrollTop >= top && scrollTop <= top + height / 2) {
        currPage = i + 1;
      }
    }
    showPageTimer = setTimeout(() => {
      isShowPage = false;
      showPageTimer = null;
    }, 3e3);
  }, 50);
}
