function getDominantColor() {
      const img = document.getElementById('image');
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // تعيين حجم canvas ليتناسب مع الصورة
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      let r = 0, g = 0, b = 0, total = 0;

      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
        total++;
      }

      // حساب متوسط الألوان
      r = Math.floor(r / total);
      g = Math.floor(g / total);
      b = Math.floor(b / total);

      // تحويل اللون إلى صيغة HEX
      const dominantColor = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

      // تعيين اللون السائد كمتغير CSS
      document.documentElement.style.setProperty('--dominant-color', dominantColor);

      // عرض اللون المستخرج
      document.getElementById('colorValue').textContent = dominantColor;
    }