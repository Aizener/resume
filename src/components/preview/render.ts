import html2Canvas from 'html2canvas';
import { useDebounceFn, useFindLastChildFn } from '@/utils/hooks';
import { jsPDF } from 'jspdf';

export let cvsArr = $ref<HTMLCanvasElement[]>([]);
export const a4Width = $ref(595.28); // a4纸的宽度 单位pt
export const a4Height = $ref(841.89); //  a4纸的高度 单位pt
export const render = async () => {
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

export const save = () => {
  const doc = new jsPDF({
    unit: 'pt', // 单位用pt
    format: 'a4',
  });
  for (let i = 0 ; i < cvsArr.length ; i ++) {
    const page = cvsArr[i].toDataURL('image/jpeg', 1.0);
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, a4Width, a4Height + 30, 'F');
    doc.addImage(page, 'jpeg', 0, 15, a4Width, a4Height);
    i < cvsArr.length - 1 && doc.addPage();
  }
  doc.save();
}

export const doRender = useDebounceFn(render, 3e3);
