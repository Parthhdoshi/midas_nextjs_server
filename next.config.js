/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com','randomuser.me',"https://zernxcmwig.ap-south-1.awsapprunner.com/"],
      },
      experimental:{
        reactRoot: true,
        suppressHydrationWarning: true,
      }
}

module.exports = nextConfig
