# ng-grid  

An easy-to-use grid – build as a angular component.

## Install dependencies  

```
npm install
````

## Run project  

```
gulp
```

## Usage

```
<grid
  items="$ctrl.items"
  options="{
    gridType: 'flexbox',
    columns: 4,
    gutter: 10,
    breakpoints: [
      { breakAt: 1024, 'columns' : 3 },
      { breakAt: 768, 'columns' : 2 },
      { breakAt: 480, 'columns' : 1 }
    ]
  }">
</grid>
```  

## Grid items  

The `items` attribute takes an array and displays it in the grid.

## Grid options

The grid has the following options:

- `gridType` (can be `flexbox`, `inline-block` and `float`)
- `columns` (integer)
- `gutter` (integer)
- `breakpoints` (array)
- `breakAt` (integer, property of breakpoints)
- `columns` (integer, property of breakpoints)
