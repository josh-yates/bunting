import * as BuntingFns from './lib/bunting-fns';
import { BuntingOptions } from './lib/bunting-options';
export * from './lib/bunting-options';

const defaultOptions: BuntingOptions = {
    colourSet: ['#00f', '#0f0', '#f00'],
    ropeColour: '#000'
};

export function addBuntingTo(element: HTMLElement, options: BuntingOptions = defaultOptions): void {
    element.style.position = 'relative';

    const buntingCanvas = document.createElement('canvas');

    buntingCanvas.style.position = 'absolute';
    buntingCanvas.style.top = '0';
    buntingCanvas.style.right = '0';
    buntingCanvas.style.bottom = '0';
    buntingCanvas.style.left = '0';

    element.appendChild(buntingCanvas);

    window.addEventListener('resize', () => BuntingFns.drawBunting(
        buntingCanvas,
        options.colourSet,
        options.ropeColour
    ));

    BuntingFns.drawBunting(
        buntingCanvas,
        options.colourSet,
        options.ropeColour
    );
}
