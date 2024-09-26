document.addEventListener('DOMContentLoaded', () => {
    const changeInfoButton = document.getElementById('changeInfo');
    const nameElement = document.getElementById('name');
    const hobbyElement = document.getElementById('hobby');
    const foodElement = document.getElementById('food');

    const names = ['山田太郎', '鈴木花子', '佐藤次郎', '田中美香'];
    const hobbies = ['読書', '旅行', '料理', 'スポーツ'];
    const foods = ['カレー', '寿司', 'ラーメン', 'ステーキ'];

    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    changeInfoButton.addEventListener('click', () => {
        nameElement.textContent = getRandomItem(names);
        hobbyElement.textContent = getRandomItem(hobbies);
        foodElement.textContent = getRandomItem(foods);
    });
});
