/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    basePath: "",
    output: 'export',
    // Optional: Add a trailing slash to all paths `/about` -> `/about/`
    trailingSlash: true,
    // Optional: Change the output directory `out` -> `dist`
    distDir: 'out',
}

module.exports = nextConfig