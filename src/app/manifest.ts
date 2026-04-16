import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ishwaryam Physiotherapy speciality clinic',
    short_name: 'Ishwaryam',
    description: 'Expert Physiotherapy & Pain Rehabilitation in Gudiyatham.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0A6E6E',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
