# NgShowExample

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
