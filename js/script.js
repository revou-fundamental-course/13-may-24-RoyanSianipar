function calculate() {
  const base = parseFloat(document.getElementById('base').value);
  const height = parseFloat(document.getElementById('height').value);
  const side = parseFloat(document.getElementById('side').value);
  const shape = document.getElementById('shape').value;
  let area, perimeter;

  if (shape === 'segitiga') {
    area = 0.5 * base * height;
    perimeter = base + height + side;
  } else if (shape === 'jajar_genjang') {
    area = base * height;
    perimeter = 2 * (base + side);
  }

  document.getElementById('area').value = area;
  document.getElementById('perimeter').value = perimeter;
}

function resetForm() {
  document.getElementById('calcForm').reset();
  document.getElementById('area').value = '';
  document.getElementById('perimeter').value = '';
  document.getElementById('shapeImage').innerHTML = '';
}

function showImage() {
  const shape = document.getElementById('shape').value;
  const shapeImage = document.getElementById('shapeImage');
  shapeImage.innerHTML = '';

  if (shape === 'segitiga') {
    const img = document.createElement('img');
    img.src =
      'https://upload.wikimedia.org/wikipedia/commons/7/7a/Equilateral_triangle.png'; // Gambar segitiga
    img.alt = 'Segitiga';
    shapeImage.appendChild(img);
  } else if (shape === 'jajar_genjang') {
    const img = document.createElement('img');
    img.src =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Parallelogram.svg/600px-Parallelogram.svg.png'; // Gambar jajar genjang
    img.alt = 'Jajar Genjang';
    shapeImage.appendChild(img);
  }
}
