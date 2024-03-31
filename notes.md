### diffing of lists is performed using keys meaning in React??

In React, when you have a list of items that you need to render and those items might change over time, it's important to efficiently update the UI to reflect those changes. One common approach to handling this is by using a "key" prop.

When you render a list of items in React, you typically use the map() function to iterate over an array and create React elements for each item. For example:
```
const items = ['apple', 'banana', 'orange'];

const itemList = items.map((item, index) => (
  <li key={index}>{item}</li>
));

return (
  <ul>
    {itemList}
  </ul>
);
```
In this example, key={index} is used to assign a unique identifier to each list item. React uses these keys to efficiently update the DOM. When React reconciles the virtual DOM with the actual DOM, it uses keys to identify which items have changed, been added, or been removed.

However, using the index of the item as the key can lead to issues if the list order changes, or if items are added or removed from the middle of the list. In such cases, React may re-render more items than necessary, leading to performance issues or incorrect behavior.

To avoid these issues, it's recommended to use stable identifiers for list items whenever possible. If your list items have unique IDs from your data source (such as database IDs), you should use those IDs as keys instead of array indices.

Here's an example using unique IDs as keys:
```
const items = [
  { id: 1, name: 'apple' },
  { id: 2, name: 'banana' },
  { id: 3, name: 'orange' }
];

const itemList = items.map(item => (
  <li key={item.id}>{item.name}</li>
));

return (
  <ul>
    {itemList}
  </ul>
);
```
Using stable identifiers as keys ensures that React can accurately track which items have changed, been added, or been removed, even if the order of the list changes or items are added/removed. This leads to better performance and avoids potential bugs.


### Fibre