# Employee Manager Code Snippets

###  Base Button Styles

```css
width: 100%;
border: inherit;
background-color: inherit;
font-size: 1rem;
color: #8e979c;
border-radius: 4px;
box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
padding: 0.65rem 1rem;
margin-bottom: 0.5rem;
```

```javascript
//styled component css based on props
 ${props => props.type === "signup" &&
         css`
         background: #f15b29;
         color:white;
         `
}

//styled component css based on props
${props => props.type === "login" &&
        css`
        background: #03a9f4;
        color:white;
        `
}
```
