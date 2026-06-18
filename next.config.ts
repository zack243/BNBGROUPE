import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
