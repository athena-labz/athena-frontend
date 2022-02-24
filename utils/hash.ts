

export default function hash_generator() {
    const allCapsAlpha = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    const allLowerAlpha = ["abcdefghijklmnopqrstuvwxyz"];
    const allNumbers = ["0123456789"];

    const base = [...allCapsAlpha, ...allNumbers, ...allLowerAlpha];

    return [...Array(28)]
        .map(i => base[Math.random() * base.length | 0])
        .join('');

}