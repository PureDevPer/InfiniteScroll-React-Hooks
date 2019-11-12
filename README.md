# Infinite Scroll

https://frosty-wiles-b88947.netlify.com/

- Developed Inifite Scroll using React Hooks
- API utilized: [Dog API](https://dog.ceo/dog-api/)

## Reference

- [**window.scrollY**](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY): Returns the number of pixels that the document is currently scrolled vertically
  ![window.scroll](https://i.stack.imgur.com/9WP3O.png)

- [**window.innerHeight**](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight): Height (in pixels) of the browser window viewport including, if rendered, the horizontal scrollbar.
  ![window.innerHeight](https://miro.medium.com/max/877/0*XIycLZ3Ievmf9_Bq.png)

- [**Element.clientHeight**](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight): zero for elements with no CSS or inline layout boxes; otherwise, it's the inner height of an element in pixels. It includes padding but excludes borders, margins, and horizontal scrollbars (if present). `clientHeight` can be calculated as: CSS height + CSS padding - height of horizontal scrollbar (if present).
  ![clientHeight](https://media.geeksforgeeks.org/wp-content/uploads/20190911181256/clientHeight.png)

- [**HTMLElement.offsetTop**](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop): returns the distance of the current element relative to the top of the offsetParent node.
  ![offsetTop](https://brooknovak.files.wordpress.com/2013/06/figure37.png)
