let lastColor: any = null;

export default function getRandomBgColor() {
  const colors = [
    "bg-orange-400/15",
    "bg-green-400/15",
    "bg-red-400/15",
    "bg-blue-400/15",
    "bg-purple-400/15",
    "bg-pink-400/15",
    "bg-yellow-400/15",
    "bg-teal-400/15",
  ];

  let newColor;
  do {
    const randomIndex = Math.floor(Math.random() * colors.length);
    newColor = colors[randomIndex];
  } while (newColor === lastColor);

  lastColor = newColor;
  return newColor;
}
