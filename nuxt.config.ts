
export default defineNuxtConfig({
  
  css: [
    '@/assets/styles/font.scss',
    '@/assets/styles/tailwind.scss',
    '@/assets/styles/scrollbar.scss',
    '@/assets/styles/toast.scss',
    '@/assets/styles/file-upload.scss',
    '@/assets/styles/datepicker.scss',
  ],
  meta: {
    meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }],
    script: [
      // 다음 우편번호
      { src: '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js' },
    ],
    title: '어디캠핑',
    htmlAttrs: {
      lang: 'ko',
    },
    bodyAttrs: {
      class: 'antialiased tracking-tight text-gray-600 ',
    },
  },
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
});
