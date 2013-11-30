# refactor-temp

> Temporary, repo to plan and discuss refactoring Assemble. This project is a WIP and will change often.


## Options

### Views
* layout
* layouts/layoutdir
* layoutext
* pages
* partials/includes
* collections


### Paths
* flatten
* permalinks
* prettylinks
* assets


### Data
* data/metadata


### Transformation
* engine
* preprocess
* plugins/middleware
* helpers
* postprocess



## Config





## Pages

```js
Page: {
  // YAML front matter
  data: {
    id: '' // generated or user-defined function
  },
  // Body
  content: '',
  // the stringified, non-processed, non-compiled page. Including data and content.
  original: {}
};
```


## Collections
### collection defaults

* tags
* categories
* archives
* posts
* pages





## Events/Other
* CLI
* routes: paths, permalinks, prettylinks, etc
* steps
* Cache
*