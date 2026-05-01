const isEligible = (age: number) => {
    return age > 21 ? 'Biyer jonno eligible': 'Ekhono to geyda';
}

console.log(isEligible(22));


const theme = "Dark";

const defaultTheme = theme ?? 'Light theme';

console.log(defaultTheme);