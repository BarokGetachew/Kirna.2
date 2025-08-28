module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // Disable overly strict rules that cause build failures
    'react/no-unescaped-entities': 'off',
    '@next/next/no-html-link-for-pages': 'off',
  },
}
