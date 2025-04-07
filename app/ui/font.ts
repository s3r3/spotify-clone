import localFont from 'next/font/local'

export const Satoshi = localFont({
  src: [
    {
      path: '../../public/font/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/Satoshi-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/font/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/font/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/font/Satoshi-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
})