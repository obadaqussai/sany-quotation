import { Font } from '@react-pdf/renderer';

const registerFonts = () => {
  try {
    // Register Arabic font
    Font.register({
      family: 'Arabic',
      src: require('../assets/fonts/Amiri-Regular.ttf'), // Path to your downloaded font
    });

    // Register other fonts if needed
    Font.register({
      family: 'Helvetica',
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf',
    });
  } catch (error) {
    console.error('Font registration error:', error);
  }
};

export default registerFonts;