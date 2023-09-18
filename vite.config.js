// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        plotly: resolve(__dirname, "nested/plotly.html"),
        chart: resolve(__dirname, "nested/chart.html"),
        googleCharts: resolve(__dirname, "nested/google-charts.html"),
      },
    },
  },
});
