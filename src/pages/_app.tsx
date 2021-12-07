import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyle from 'styles/global.styles'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="theme-color" content="#06092B" />
        <link rel="shortcut icon" href="/img/icon-192.png" />
        <link rel="apple-touch-icon" href="/img/icon-576.png" />
      </Head>
      <NextSeo
        title="CodeRoot | Crie aplicações reais"
        description="Aprenda a criar websites, webApps, usando HTML, CSS, JavaScript e mais!"
        canonical="https://coderoot.vercel.app/"
        openGraph={{
          url: 'https://coderoot.vercel.app/',
          title: 'Desenvolvimento Frontend | Crie aplicações reais',
          description:
            'Aprenda a criar websites, webApps, usando HTML, CSS, JavaScript e mais!',
          images: [{ url: 'https://coderoot.vercel.app/img/cover.jpeg' }],
          site_name: 'Desenvolvimento Frontend',
          locale: 'pt_AO'
        }}
        twitter={{
          handle: '@buzzcode42',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
