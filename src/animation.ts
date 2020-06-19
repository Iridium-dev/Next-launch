import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
  } from '@angular/animations';

  export const fader =
    trigger('routeAnimations', [
      transition('* <=> fade', [
        // Set a default  style for enter and leave
        query(':enter, :leave', [
          style({
            position: 'absolute',
            left: 0,
            width: '100%',
            opacity: 0,
            transform: 'scale(0) translateY(100%)',
          }),
        ]),
        // Animate the new page in
        query(':enter', [
          animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
        ])
      ]),
  ]);

  export const slider =
    trigger('routeAnimations', [
      //transition('* => isLeft', slideTo('left') ),
      //transition('* => isRight', slideTo('right') ),
      transition('isRight => isLeft', slideTo('left') ),
      transition('isLeft => isRight', slideTo('right') ),
    ]);

  function slideTo(direction) {
    const optional = { optional: true };
    return [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          [direction]: 0,
          width: '100%'
        })
      ], optional),
      query(':enter', [
        style({ [direction]: '-100%'})
      ]),
      group([
        query(':leave', [
          animate('400ms ease-in-out', style({ [direction]: '100% '}))
        ], optional),
        query(':enter', [
          animate('400ms ease-in-out', style({ [direction]: '0%'}))
        ])
      ]),
      // Normalize the page style... Might not be necessary

      // Required only if you have child animations on the page
      // query(':leave', animateChild()),
      // query(':enter', animateChild()),
    ];
  }
