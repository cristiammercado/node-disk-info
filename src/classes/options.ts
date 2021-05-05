/**
 * Class with options passed to getDiskInfo
 * @author Ivo Valls
 */
export default class DiskInfoOptions {

    /**
     * If set to true only the names will be retrieved
     */
    private readonly _namesOnly: boolean;

    public constructor(namesOnly?: boolean) {
        this._namesOnly = namesOnly ?? false;
    }


    public get namesOnly(): boolean {
        return this._namesOnly;
    }
}