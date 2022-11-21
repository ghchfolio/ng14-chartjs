// takes a fgColor and bgColor, creates stripes
// and applies it to the bar
export function CreateDiagonalPattern(fgColor = 'gray', bgColor = 'darkgray') {
    const pattern = document.createElement('canvas');
    pattern.width = 10;
    pattern.height = 10;

    let c = pattern.getContext('2d');

    if (c !== null) {
        c.fillStyle = bgColor;
        c.fillRect(0, 0, pattern.width, pattern.height);
        c.strokeStyle = fgColor;
        c.beginPath();
        c.moveTo(2, 0);
        c.lineTo(10, 8);
        c.stroke();
        c.beginPath();
        c.moveTo(0, 8);
        c.lineTo(2, 10);
        c.stroke();
        return c.createPattern(pattern, 'repeat');
    }

    return 'lightblue';
}