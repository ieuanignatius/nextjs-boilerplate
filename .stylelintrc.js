module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-prettier', 'stylelint-config-sass-guidelines'],
    plugins: ['stylelint-order', 'stylelint-scss'],
    rules: {
        'order/properties-alphabetical-order': true,
        'at-rule-no-unknown': null,
        'at-rule-disallowed-list': ['debug'],
        'scss/at-extend-no-missing-placeholder': true,
        'scss/at-rule-no-unknown': true,
        'declaration-block-trailing-semicolon': "always",
        'scss/selector-no-redundant-nesting-selector': true,
        'comment-no-empty': true,
        'scss/dollar-variable-pattern': '',
        'function-url-quotes': "never",
    },
};