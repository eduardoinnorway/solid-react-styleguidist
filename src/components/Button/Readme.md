Basic buttons:

```jsx
<Button>Button</Button>
<Button disabled>Button disabled</Button>
<Button onClick={(e) => { e.preventDefault(); alert('Hola');}}>Button with action</Button>
<Button className="foo-bar-class">Button passing class</Button>
```

Filled buttons:

```jsx
<Button filled primary>Button filled primary</Button>
<Button filled primary gradient>Button filled primary gradient</Button>
<Button filled secondary>Button filled secondary</Button>
<Button filled tertiary>Button filled tertiary</Button>
<Button filled tertiary1>Button filled tertiary-1</Button>
<Button filled tertiary2>Button filled tertiary-2</Button>
<Button filled tertiary3>Button filled tertiary-3</Button>
```

React Hooks example:

```jsx
import React, { useState } from 'react';

const HookExample = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </div>
  );
}
<HookExample/>
```
