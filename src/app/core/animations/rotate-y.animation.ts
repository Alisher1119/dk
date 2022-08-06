import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";

export const rotateY = trigger('routeAnimations', [
    transition('* <=> *', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
        })
      ],{ optional: true }),
      query(':enter', [
        style({
          transform: "rotateY(90deg)",
          opacity: 0,
        })
      ]),
      query(':leave', [
        style({
          opacity: 1
        })
      ], { optional: true }),
      group([
        query(':leave', [
          animate('500ms ease-out', style({transform: "rotateY(-90deg)", opacity: 0}))
        ], { optional: true }),
        query(':enter', [
          animate('500ms 500ms ease-out', style({transform: "rotateY(0)", opacity: 1}))
        ], { optional: true }),
        query('@*', animateChild(), { optional: true })
      ]),
    ])
  ]
);
