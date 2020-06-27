export function drawBunting(
    canvas: HTMLCanvasElement,
    colorArray: string[],
    ropeColour: string,
    useShadow: boolean
) {
    //Make context use actual resolution
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const context = canvas.getContext("2d");

    if (context === null) {
        throw "Bunting: unable to get 2D context on canvas.";
    }

    context.scale(dpr, dpr);

    const canvasWidth = rect.width;
    const halfWidth = canvasWidth / 2;

    //Bunting line

    const ropeWidth = 5;

    context.beginPath();
    context.lineWidth = ropeWidth;
    context.strokeStyle = ropeColour;
    context.moveTo(0, 0);
    const bottomPoint = 80;
    context.quadraticCurveTo(canvasWidth / 2, bottomPoint, canvasWidth, 0);
    context.shadowColor = "#737373";
    context.shadowBlur = 10;
    context.shadowOffsetY = 10;
    context.stroke();
    context.closePath();

    //Flags

    const flagLength = 40;
    const flagWidth = 40;
    const flagSpacing = 80;
    const numberOfFlags = Math.floor((halfWidth - (flagWidth / 2)) / flagSpacing);

    const a = 0.5 * bottomPoint / ((halfWidth * halfWidth) - (canvasWidth * halfWidth));
    const b = -1 * a * canvasWidth;

    drawFlag(halfWidth, context, a, b, ropeWidth, flagWidth, flagLength, colorArray);
    let flagOffset = 0;
    for (let i = 0; i < numberOfFlags; i++) {
        flagOffset += flagSpacing;
        drawFlag(halfWidth + flagOffset, context, a, b, ropeWidth, flagWidth, flagLength, colorArray);
        drawFlag(halfWidth - flagOffset, context, a, b, ropeWidth, flagWidth, flagLength, colorArray);
    }
}

function drawFlag(
    posx: number,
    context: CanvasRenderingContext2D,
    a: number,
    b: number,
    ropeWidth: number,
    flagWidth: number,
    flagLength: number,
    colorArray: string[]): void {
        context.beginPath();
        const color = colorArray[getRandomInt(0, colorArray.length - 1)];
        context.strokeStyle = color;
        context.fillStyle = color;
        const posy = (a * posx * posx) + (b * posx) - (ropeWidth / 2);
        const grad = (2 * a * posx) + b;
        const incept = posy - (grad * posx);
        const startx = posx - (flagWidth / 2);
        const starty = (grad * startx) + incept;
        const endx = posx + (flagWidth / 2);
        const endy = (grad * endx) + incept;
        const midx = posx;
        const midy = posy + flagLength;
        context.moveTo(startx, starty);
        context.lineTo(midx, midy);
        context.lineTo(endx, endy);
        context.lineTo(startx, starty);
        context.closePath();
        context.shadowColor = "#737373";
        context.shadowBlur = 10;
        context.shadowOffsetY = 10;
        context.fill();
}

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}