<template>
  <b-table
    :items="data"
    :fields="fields"
    :sort-compare="sortTable"
    sort-icon-left
    responsive="sm"
  />
</template>

<script>
export default {
  name: 'WidgetDataTable',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      fields: [
        {
          key: 'period',
          label: 'Period',
          sortable: true
        },
        {
          key: 'value',
          label: 'Market share',
          sortable: true,
          formatter: value => (value !== 'Infinity') ? `${value} %` : 'no-information'
        }
      ]
    }
  },
  methods: {
    sortTable (a, b, key) {
      if (key === 'period') {
        return a.index - b.index
      } else if (key === 'value') {
        return b.value - a.value
      }
      return 0
    }
  }
}
</script>
