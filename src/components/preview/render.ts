import html2Canvas from 'html2canvas';
import { useDebounceFn, useFindLastChildFn } from '@/utils/hooks';

export let cvsArr: HTMLCanvasElement[] = $ref([]);
export const a4Width = $ref(595.28); // a4纸的宽度 单位pt
export const a4Height = $ref(841.89); //  a4纸的高度 单位pt
const render = async () => {
  const temp = document.querySelector("#temp-page") as HTMLElement;
  const container = (document.querySelector('#pages') as HTMLElement);
  container.innerHTML = '';
  cvsArr = [];

  const page = Math.ceil(temp.scrollHeight / a4Height);
  let lastY = 0;
  for (let i = 0 ; i < page ; i ++) {
    const el = useFindLastChildFn(document.querySelector('#temp') as HTMLElement, a4Height * (i + 1));
    const y = el.offsetTop;
    const height = i === page - 1 ? a4Height : y - lastY;
    
    const canvas = await html2Canvas(temp, {
      scale: 2,
      y: lastY,
      width: a4Width,
      height: height,
    });
    
    lastY = y;
    cvsArr.push(canvas);
    container.appendChild(canvas);
  }
}

export const doRender = useDebounceFn(render, 3e3);
