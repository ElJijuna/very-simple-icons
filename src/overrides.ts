/**
 * Manual slug overrides for cases where naive normalization fails.
 * Key: normalized candidate from package name. Value: correct simple-icons slug.
 */
export const OVERRIDES: Record<string, string> = {
  'node': 'nodedotjs',
  'nodejs': 'nodedotjs',
  'react-dom': 'react',
  'reactdom': 'react',
  'react-native': 'react',
  'reactnative': 'react',
  'next': 'nextdotjs',
  'nextjs': 'nextdotjs',
  'next.js': 'nextdotjs',
  'nuxt': 'nuxtdotjs',
  'nuxtjs': 'nuxtdotjs',
  'express': 'express',
  'vue': 'vuedotjs',
}
