// takes a fgColor and bgColor, draws a diagonal line from top left to bottom right,
// and adds the pattern to the bar that called it.
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

// takes a fgColor and bgColor, draws a diagonal line from bottom left to top right,
// and adds the pattern to the bar that called it.
export function CreateReverseDiagonalPattern(fgColor = 'gray', bgColor = 'darkgray') {
    const pattern = document.createElement('canvas');
    pattern.width = 10;
    pattern.height = 10;

    let c = pattern.getContext('2d');

    if (c !== null) {
        c.fillStyle = bgColor;
        c.fillRect(0, 0, pattern.width, pattern.height);
        c.strokeStyle = fgColor;

        c.beginPath();
        c.moveTo(0, 10);
        c.lineTo(10, 0);
        c.stroke();

        c.beginPath();
        c.moveTo(10, 0);
        c.lineTo(0, 10);
        c.stroke();

        return c.createPattern(pattern, 'repeat');
    }

    return 'lightblue';
}

export function CreateGradientPattern(top = 'white', bottom = 'red') {
    const canvasEl = document.createElement('canvas');
    const canvasH = 400;
    canvasEl.height = canvasH;

    let c = canvasEl.getContext('2d');

    if (c !== null) {
        let gradient = c.createLinearGradient(0, 0, 0, canvasH);
        gradient.addColorStop(0, top);
        gradient.addColorStop(1, bottom);
        c.fillStyle = gradient;
        c.fillRect(0, 0, 0, 400);
        return gradient;
    }

    return 'lightblue';
}