import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🚀 Mudah Digunakan',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Setup bot WhatsApp dalam hitungan menit. Interface yang intuitif dan user-friendly
        memungkinkan Anda mengelola bot tanpa perlu keahlian teknis yang mendalam.
      </>
    ),
  },
  {
    title: '⚡ Performa Tinggi',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Hosting bot 3x lebih cepat dari hosting mandiri. Server cloud premium dengan
        uptime 99.9% memastikan bot Anda selalu aktif 24/7 tanpa gangguan.
      </>
    ),
  },
  {
    title: '🤖 Fitur Lengkap',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        500+ fitur bot WhatsApp terlengkap. Mulai dari AI ChatGPT, download media,
        manajemen grup, broadcast, hingga integrasi API eksternal untuk kebutuhan bisnis.
      </>
    ),
  },
  {
    title: '🎯 Auto-Response Cerdas',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Sistem respons otomatis dengan AI yang dapat memahami konteks percakapan,
        mendukung multi-bahasa, dan pembelajaran dari interaksi pengguna.
      </>
    ),
  },
  {
    title: '📊 Analytics & Monitoring',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Dashboard analytics real-time untuk memantau performa bot, statistik pengguna,
        laporan aktivitas, dan insights mendalam untuk optimasi bisnis.
      </>
    ),
  },
  {
    title: '🔒 Keamanan Terjamin',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Enkripsi end-to-end, autentikasi 2FA, backup otomatis, dan perlindungan dari spam
        serta serangan berbahaya untuk melindungi data dan privasi Anda.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <h2>🌟 Mengapa Memilih Wibusoft?</h2>
          <p>Platform hosting bot WhatsApp terdepan dengan fitur terlengkap di Indonesia</p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
