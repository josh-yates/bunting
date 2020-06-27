export interface BuntingOptions {
    /**
     * The range of colours to use for the flags, as hex codes.
    */
    colourSet: string[],
    /**
     * The colour of the rope, as a hex code.
     */
    ropeColour: string,
    /**
     * Whether the rope and flags should have a drop shadow.
     */
    useShadow: boolean
}