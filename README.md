# NgShowExample

> Are you wondering how to use ngShow in Angular 11? There is a way to achieve it by using `[hidden]= “false”`. However, if you are migrating large `angularjs` projects into `angular 11` then it is really tedious and error prone work to convert them into `hidden` and negate all existing logic to show the element. In this article I will explain how you can create your own `ngShow` directive in Angular 11.

Here is the [live site](http://www.rupeshtiwari.com/ng-show-angular11/) to see how `ngShow` works in Angular 11.

## Example to use ngShow

```html
<button [ngShow]="show">Create</button>
```

```ts
get show() {
  return false; // it will hide button. If you pass `true` it will show button.
}
```
