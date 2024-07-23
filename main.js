const lastNames = names.trim().split('\n');

function generateRandomName() {
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  const nameLength = Math.random() < 0.5 ? 1 : 2;

  let randomName = '';
  for (let i = 0; i < nameLength; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    randomName += words[randomIndex];
  }

  return randomLastName + randomName;
}

document.getElementById('button').addEventListener('click', () => {
  const randomName = generateRandomName();
  document.getElementById('name').textContent = randomName;
});
