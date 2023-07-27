import { createProxyMiddleware } from "http-proxy-middleware";

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export default createProxyMiddleware({
  target: process.env.API_HOST,
  changeOrigin: true,
  pathRewrite: {
    "^/api/proxy": "",
  },
});
