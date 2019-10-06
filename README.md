# Foxlite

> Technical test for Foxintelligence

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# Development guide

## Add a widget

In order to add a new widget:
First import it in ***pages/market/_merchant.vue***:
```javascript
import WidgetNewOne from '~/components/widgetNewOne'
```
Then register it in **data()**:
```javascript
widgets: [
	...,
	{
		title: 'The New One',
		component: WidgetNewOne
	}
]
```

> it must accept the prop "data"