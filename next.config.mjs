const nextConfig = {
  allowedDevOrigins: ['*.dev.coze.site'],
  images: {
    // Cap max image size to 2048px to prevent 3840px oversized images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
