Links, can use same props as Buttons but generates "a" element so it accepts href:

```jsx
<Link onClick={(e) => { e.preventDefault(); alert('Hola Link');}}>Link</Link>
```
```jsx
<Link filled primary href="http://www.google.com" target="_blank">Link www.google.com</Link>
```
