const Colors = {
    Primary: "RED",
    Secondary: "BLUE"
} as const;

type ValidColor = typeof Colors[keyof typeof Colors];

function setColor(c: ValidColor) {
    return c;
}
const color = "RED"
console.log(setColor(color));