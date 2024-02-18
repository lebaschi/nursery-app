/** @type {import('next').NextConfig} */
const nextConfig = {


        async rewrites() {
          return [
            {
                source: '/api/:path*', 
                destination: 'https://app.famly.co/api/:path*'
            },
          ];
        },
      };



export default nextConfig;
