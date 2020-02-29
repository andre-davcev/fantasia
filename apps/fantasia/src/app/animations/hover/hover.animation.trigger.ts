import { trigger, AnimationTriggerMetadata, useAnimation, transition, state } from '@angular/animations';

import { Animation } from '@fantasia/app/enums';

import { AnimationHoverProperties } from './hover.animation.properties';
import { AnimationHoverOffStyle } from './hover-off.animation.style';
import { AnimationHoverOnStyle } from './hover-on-animation.style';

export const AnimationHover: AnimationTriggerMetadata = trigger(Animation.Hover, [
  state(Animation.Default, AnimationHoverOffStyle, { params: { scale: 1.00, opacity: 0.9 }}),
  state(Animation.Hover, AnimationHoverOnStyle,    { params: { scale: 1.05, opacity: 1.0 }}),
  transition(`${Animation.Default} => ${Animation.Hover}`, [ useAnimation(AnimationHoverProperties) ]),
  transition(`${Animation.Hover} => ${Animation.Default}`, [ useAnimation(AnimationHoverProperties) ])
]);
