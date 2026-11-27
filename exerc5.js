
 const aparelhos = [
    { modelo: 'Galaxy A55', so: 'Android', preco: 2299, sensores: ['acelerômetro', 'giroscópio', 'NFC', 'impressão digital'] },
    { modelo: 'iPhone 15', so: 'iOS', preco: 5999, sensores: ['acelerômetro', 'LiDAR', 'barômetro', 'Face ID'] },
    { modelo: 'Moto G85', so: 'Android', preco: 1499, sensores: ['acelerômetro', 'proximidade', 'luz ambiente'] },
    { modelo: 'Redmi Note 13', so: 'Android', preco: 1399, sensores: ['infravermelho', 'acelerômetro', 'giroscópio'] },
];

const btnAparelhos = document.getElementById('btn-aparelhos');
btnAparelhos.addEventListener('click', () => {
    const ul = document.getElementById('smartphones');

    const items = aparelhos[1].sensores.map(item => `<li>${item}</li>`);
    ul.innerHTML = items.join('');
})