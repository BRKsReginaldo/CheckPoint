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

  mounted() {
    $(this.$el).on('show.bs.modal', ev => this.$emit('shown', ev))
    $(this.$el).on('hidden.bs.modal', ev => this.$emit('hidden', ev))
  },

  render(h) {
    return (
      h('div', {
        'class': [
          'modal',
          'show',
          'fade'
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
                  'data-dismiss': 'modal',
                  'aria-label': 'Close'
                }
              }, [
                h('span', {
                  attrs: {
                    'aria-hidden': 'true'
                  },
                  domProps: {
                    innerHTML: '&times;'
                  }
                })
              ])
            ]),
            h('div', {
              'class': [
                'modal-body'
              ]
            }, [
              this.$slots.default
            ]),
            this.$slots.hasOwnProperty('footer')
              ? h('div', {
                'class': [
                  'modal-footer'
                ]
              }, [
                this.$slots.footer
              ])
              : null
          ])
        ])
      ])
    )
  }
})