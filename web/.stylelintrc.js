module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order'
  ],
  rules: {
    'order/properties-alphabetical-order': null,
    'scss/at-mixin-argumentless-call-parentheses': null,
    'scss/double-slash-comment-empty-line-before': null,
    'scss/no-global-function-names': null,
    'at-rule-empty-line-before': null,
    'color-hex-case': 'upper',
    'max-nesting-depth': null,
    'no-descending-specificity': null,
    'no-empty-source': null,
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
        ignorePseudoElements: ['deep']
      }
    ],
    'string-quotes': 'single',
    'value-keyword-case': [
      'lower',
      {
        camelCaseSvgKeywords: true
      }
    ],
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: ['optimize-contrast']
      }
    ]
  }
}
