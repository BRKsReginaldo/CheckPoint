import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    }
  },

  methods: {
    open() {
      $(this.$el).modal('show')
    },
    close() {
      $(this.$el).modal('hide')
    }
  },

  render(h) {
    return (
      h('div', {
        'class': [
          'modal',
          this.$props.show ? 'show fade' : ''
        ],
        attrs: {
          tabindex: "-1",
          role: "dialog"
        }
      }, [
        h('div', {
          'class': [
            'modal-dialog'
          ],
          attrs: {
            role: 'document'
          }
        }, [
          h('div', {
            'class': [
              'modal-content'
            ]
          }, [
            h('div', {
              'class': [
                'modal-header'
              ]
            }, [
              h('h5', {
                'class': [
                  'modal-title'
                ]
              }, [this.$props.title]),
              h('button', {
                'class': [
                  'close'
                ],
                attrs: {
                  type: 'button',
                  dataDismiss: 'modal',
                  ariaLabel: 'Close'
                }
              }, [
                h('span', {
                  attrs: {
                    ariaHidden: 'true'
                  },
                  domProps: {
                    innerHTML: '&times;'
                  }
                })
              ])
            ])
          ])
        ])
      ])
    )
  }
})