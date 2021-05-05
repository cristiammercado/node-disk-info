import { getDiskInfo, getDiskInfoSync } from "../src";
import { Utils } from "../src/utils/utils";
import * as os from "os";
import DiskInfoOptions from "../src/classes/options";
import { Constants } from "../src/utils/constants";
describe("node-disk-info-win32", () => {
    const WINDOWS_COMMAND_RESPONSE: Buffer = Buffer.from(
        "\r\r\n" +
        "\r\r\n" +
        "Caption=C:\r\r\n" +
        "Description=Disco fijo local\r\r\n" +
        "FreeSpace=3771858944\r\r\n" +
        "Size=119387713536\r\r\n" +
        "VolumeSerialNumber=2ADAE52C\r\r\n" +
        "\r\r\n" +
        "\r\r\n" +
        "Caption=D:\r\r\n" +
        "Description=Disco fijo local\r\r\n" +
        "FreeSpace=17136254976\r\r\n" +
        "Size=925015994368\r\r\n" +
        "VolumeSerialNumber=5140A8B0\r\r\n" +
        "\r\r\n" +
        "\r\r\n" +
        "Caption=E:\r\r\n" +
        "Description=Disco CD-ROM\r\r\n" +
        "FreeSpace=\r\r\n" +
        "Size=\r\r\n" +
        "VolumeSerialNumber=\r\r\n" +
        "\r\r\n" +
        "\r\r\n" +
        "\r\r\n",
        "utf8"
    );

    const WINDOWS_COMMAND_RESPONSE_NAMES_ONLY: Buffer = Buffer.from(
        "\r\r\n" +
        "\r\r\n" +
        "Caption=C:\r\r\n" +
        "\r\r\n" +
        "\r\r\n" +
        "Caption=D:\r\r\n" +
        "\r\r\n" +
        "\r\r\n" +
        "Caption=E:\r\r\n" +
        "\r\r\n" +
        "\r\r\n",
        "utf8"
    );

    beforeAll(() => {
        if (os.platform() !== "win32") {
            spyOn(Utils, "detectPlatform").and.callFake(() => "win32");
        }
        spyOn(Utils, "execute").and.callFake((param) => {
            if (param === Constants.WINDOWS_COMMAND)
                return WINDOWS_COMMAND_RESPONSE;
            else
                return WINDOWS_COMMAND_RESPONSE_NAMES_ONLY;
        });

    });

    it("should generate disks list info for Windows", (done) => {
        if (os.platform() !== "win32") {
            spyOn(Utils, "chcp").and.callFake(() => "65001");
        }
        Promise.all([getDiskInfo(), getDiskInfo(new DiskInfoOptions()), getDiskInfo(new DiskInfoOptions(true)), getDiskInfo(new DiskInfoOptions(false))])
            .then((values) => {
                expect(values).toBeDefined();
                expect(values.length).toBeGreaterThanOrEqual(0);
                expect(values.every(value => value.length > 0))
                done();
            })
            .catch((reason) => {
                done.fail(reason);
            });



    });

    it("should generate disk info for Windows", (done) => {
        if (os.platform() !== "win32") {
            spyOn(Utils, "chcp").and.callFake(() => "65001");
        }
        Promise.all([getDiskInfo(), getDiskInfo(new DiskInfoOptions()), getDiskInfo(new DiskInfoOptions(true)), getDiskInfo(new DiskInfoOptions(false))])
            .then((vals) => {
                vals.forEach(values => {


                    expect(values.length).toBeGreaterThan(0);

                    const disk = values[0];

                    expect(disk.filesystem).toBeDefined();
                    expect(typeof disk.filesystem).toEqual("string");

                    expect(disk.blocks).toBeDefined();
                    expect(typeof disk.blocks).toEqual("number");

                    expect(disk.used).toBeDefined();
                    expect(typeof disk.used).toEqual("number");

                    expect(disk.available).toBeDefined();
                    expect(typeof disk.available).toEqual("number");

                    expect(disk.capacity).toBeDefined();
                    expect(typeof disk.capacity).toEqual("string");

                    expect(disk.mounted).toBeDefined();
                    expect(typeof disk.mounted).toEqual("string");
                });
                done();
            })
            .catch((reason) => {
                done.fail(reason);
            });
    });

    it("should generate disks list info sync for Windows", () => {
        if (os.platform() !== "win32") {
            spyOn(Utils, "chcp").and.callFake(() => "65001");
        }
        var results = [getDiskInfoSync(), getDiskInfoSync(new DiskInfoOptions()), getDiskInfoSync(new DiskInfoOptions(true)), getDiskInfoSync(new DiskInfoOptions(false))]
        results.forEach(values => {
            expect(values).toBeDefined();
            expect(values.length).toBeGreaterThanOrEqual(0);
        });
    });

    it("should generate disk info sync for Windows", () => {
        if (os.platform() !== "win32") {
            spyOn(Utils, "chcp").and.callFake(() => "65001");
        }
        var results = [getDiskInfoSync(), getDiskInfoSync(new DiskInfoOptions()), getDiskInfoSync(new DiskInfoOptions(true)), getDiskInfoSync(new DiskInfoOptions(false))]
        results.forEach(values => {
            expect(values.length).toBeGreaterThan(0);

            const disk = values[0];

            expect(disk.filesystem).toBeDefined();
            expect(typeof disk.filesystem).toEqual("string");

            expect(disk.blocks).toBeDefined();
            expect(typeof disk.blocks).toEqual("number");

            expect(disk.used).toBeDefined();
            expect(typeof disk.used).toEqual("number");

            expect(disk.available).toBeDefined();
            expect(typeof disk.available).toEqual("number");

            expect(disk.capacity).toBeDefined();
            expect(typeof disk.capacity).toEqual("string");

            expect(disk.mounted).toBeDefined();
            expect(typeof disk.mounted).toEqual("string");
        });
    });

    it("should generate disks list info sync for Windows chcp 65000", () => {
        spyOn(Utils, "chcp").and.callFake(() => "65000");
        var results = [getDiskInfoSync(), getDiskInfoSync(new DiskInfoOptions()), getDiskInfoSync(new DiskInfoOptions(true)), getDiskInfoSync(new DiskInfoOptions(false))]
        results.forEach(values => {
            expect(values).toBeDefined();
            expect(values.length).toBeGreaterThanOrEqual(0);
        });
    });

    it("should generate disks list info sync for Windows chcp 65001", () => {
        spyOn(Utils, "chcp").and.callFake(() => "65001");
        var results = [getDiskInfoSync(), getDiskInfoSync(new DiskInfoOptions()), getDiskInfoSync(new DiskInfoOptions(true)), getDiskInfoSync(new DiskInfoOptions(false))]
        results.forEach(values => {
            expect(values).toBeDefined();
            expect(values.length).toBeGreaterThanOrEqual(0);
        });
    });

    it("should generate disks list info sync for Windows chcp ascii", () => {
        spyOn(Utils, "chcp").and.callFake(() => "ascii");
        var results = [getDiskInfoSync(), getDiskInfoSync(new DiskInfoOptions()), getDiskInfoSync(new DiskInfoOptions(true)), getDiskInfoSync(new DiskInfoOptions(false))]
        results.forEach(values => {
            expect(values).toBeDefined();
            expect(values.length).toBeGreaterThanOrEqual(0);
        });
    });

    it("should generate disks list info sync for Windows chcp 1252", () => {
        spyOn(Utils, "chcp").and.callFake(() => "1252");
        var results = [getDiskInfoSync(), getDiskInfoSync(new DiskInfoOptions()), getDiskInfoSync(new DiskInfoOptions(true)), getDiskInfoSync(new DiskInfoOptions(false))]
        results.forEach(values => {
            expect(values).toBeDefined();
            expect(values.length).toBeGreaterThanOrEqual(0);
        });
    });
});
