import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  keyframes,
} from '@angular/animations';
export const GeneratedStyles = {
  class: {
    'flip-2-hor-bottom-bck': style({
      '-webkit-animation':
        'flip-2-hor-bottom-bck 0.5s\r\n cubic-bezier(0.455, 0.03, 0.515, 0.955) both',
      animation:
        'flip-2-hor-bottom-bck 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955)\r\n both',
    }),
  },
  Animations: {
    'flip-2-hor-bottom-bck': keyframes([
      style({
        '-webkit-transform': 'translateY(0) translateZ(0) rotateX(0)',
        transform: 'translateY(0) translateZ(0) rotateX(0)',
        '-webkit-transform-origin': '50% 100%',
        'transform-origin': '50% 100%',
        offset: 0,
      }),
      style({
        '-webkit-transform':
          'translateY(100%) translateZ(-260px) rotateX(-180deg)',
        transform: 'translateY(100%) translateZ(-260px) rotateX(-180deg)',
        '-webkit-transform-origin': '50% 0%',
        'transform-origin': '50% 0%',
        offset: 1,
      }),
    ]),
  },
};
