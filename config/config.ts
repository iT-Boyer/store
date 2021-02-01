import path from 'path';
import { defineConfig } from 'umi';
// @ts-ignore
import px2rem from 'postcss-plugin-px2rem';
import routers from './routers';

const productPath = process.env.NODE_ENV === 'production' ? '/store/' : '/';
const precomposed = 'https://img.icons8.com/nolan/452/windows-10.png';
// @ts-ignore
export default defineConfig({
  favicon: productPath + 'favicon.ico',
  nodeModulesTransform: {
    type: 'none',
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  routes: routers,
  dynamicImport: {
    loading: '@/components/PageLoading',
  },
  fastRefresh: {},
  hash: true,
  history: { type: 'hash' },
  chainWebpack: (config) => {
    const isDev = process.env.NODE_ENV === 'development';
    const hash = !isDev ? '.[contenthash:8]' : '';
    config.output.chunkFilename(`js/[name]${hash}.async.js`);
    config.plugin('extract-css').tap((args) => [
      {
        ...args[0],
        chunkFilename: `css/[name]${hash}.chunk.css`,
      },
    ]);
  },
  links: [
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '57x57',
      href: precomposed,
    },
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '120x120',
      href: precomposed,
    },
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '72x72',
      href: precomposed,
    },
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '152x152',
      href: precomposed,
    },
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '114x114',
      href: precomposed,
    },
  ],
  dva: {},
  title: '小组件商店',
  publicPath: productPath,
  extraPostCSSPlugins: [
    //https://www.npmjs.com/package/postcss-plugin-px2rem
    px2rem({
      rootValue: 256, //开启hd后需要换算：rootValue=designWidth*100/750,此处设计稿为1920，所以1920*100/750=256
      propBlackList: [
        'border',
        'border-top',
        'border-left',
        'border-right',
        'border-bottom',
        'border-radius',
        'font-size',
      ], //这些属性不需要转换
      exclude: '/node_modules',
    }),
  ],
});
