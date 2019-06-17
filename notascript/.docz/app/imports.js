export const imports = {
  'src/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'
    ),
  'src/components/dictionary/Dictionary.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-dictionary-dictionary" */ 'src/components/dictionary/Dictionary.mdx'
    ),
}
