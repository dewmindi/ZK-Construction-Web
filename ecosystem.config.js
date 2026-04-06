module.exports = {
  apps: [
    {
      name: "zkcg",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3002
      }
    }
  ]
};