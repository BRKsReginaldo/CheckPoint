import Vue from 'vue'

export default Vue.extend({
  props: {
    label: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: false,
      default() {
        return this.$props.name
      }
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    value: {
      required: false,
      default: ''
    }
  },

  render(h) {
    const vm = this
    return (
      h('div', {
        'class': [
          'form-group'
        ]
      }, [
        !!this.$props.label ? this.$props.label : null ,
        h('input', {
          'class': [
            'form-control'
          ],
          attrs: {
            type: this.$props.type,
            id: this.$props.id,
            name: this.$props.name,
            placeholder: this.$props.placeholder,
          },
          domProps: {
            value: this.$props.value
          },
          on: {
            input: ev => vm.$emit('input', ev.target.value)
          }
        })
      ])
    )
  }
})