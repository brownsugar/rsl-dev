module.exports = {
  extends: [
    'stylelint-config-sass-guidelines',
    'stylelint-config-recess-order'
  ],
  rules: {
    'order/properties-alphabetical-order': null,
    'color-hex-case': 'upper',
    'max-nesting-depth': null,
    'number-leading-zero': 'never',
    'rule-empty-line-before': [
      'always',
      {
        except: ['after-rule'],
        ignore: ['after-comment']
      }
    ],
    'selector-class-pattern': null,
    'selector-max-id': 1,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ]
  }
}