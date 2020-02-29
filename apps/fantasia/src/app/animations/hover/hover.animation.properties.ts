import { animation, animate } from '@angular/animations';

export const AnimationHoverProperties = animation(
  [ animate('{{ duration }} {{ timingFunction }}') ],
  {
    params: {
      duration: '150ms',
      timingFunction: 'ease'
    }
  }
);

