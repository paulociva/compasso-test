import {useAnimation, transition, trigger, animation, style, animate} from '@angular/animations';

const custom = animation([
  style({
    opacity  : '{{opacity}}',
    transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
  }),
  animate('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', style('*'))
], {
  params: {
    duration: '200ms',
    delay   : '0ms',
    opacity : '0',
    scale   : '1',
    x       : '0',
    y       : '0',
    z       : '0'
  }
});

export const coreAnimations = [
  trigger('animate', [transition('void => *', [useAnimation(custom)])]),
];
