export const imports = {
  'docs/changelog.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-changelog" */ 'docs/changelog.mdx'),
}
