/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#A594FD", // Açık mor - logo ve seçili öğeler için
          DEFAULT: "#8B7AF4", // Ana mor tonu
          dark: "#7366D2", // Koyu mor
        },
        secondary: {
          light: "#F5F6FA", // Açık gri - arka plan için
          DEFAULT: "#E4E6EF", // Orta gri - border ve divider için
          dark: "#B5B5C3", // Koyu gri - ikincil metinler için
        },
        success: {
          light: "#E9FBF0", // Açık yeşil - arka plan için
          DEFAULT: "#50CD89", // Ana yeşil - pozitif değişimler için
          dark: "#47BE7D", // Koyu yeşil
        },
        danger: {
          light: "#FFF5F8", // Açık kırmızı - arka plan için
          DEFAULT: "#F1416C", // Ana kırmızı - negatif değişimler için
          dark: "#D9214E", // Koyu kırmızı
        },
        text: {
          primary: "#181C32", // Ana metin rengi
          secondary: "#5E6278", // İkincil metin rengi
          light: "#7E8299", // Açık metin rengi
        },
      },
      textColor: {
        DEFAULT: "#181C32", // Varsayılan metin rengi
      },
    },
  },
  plugins: [],
};

