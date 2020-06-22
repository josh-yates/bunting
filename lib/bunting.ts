import { BuntingOptions } from "./bunting-options";

const defaultOptions: BuntingOptions = {
    colourSet: ['#00f', '#0f0', '#f00'],
    ropeColour: '#000',
    useShadow: true,
    autoRedraw: true
};

export class Bunting {
    constructor(options: BuntingOptions = defaultOptions, targetElement: HTMLElement) {
        this._options = options;
        this._targetElement = targetElement;
    }

    private readonly _options: BuntingOptions;
    private readonly _targetElement: HTMLElement;

    public draw(): void {}
    public remove(): void {}
}