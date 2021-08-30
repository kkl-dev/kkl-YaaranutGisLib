import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class WorkUnitComponent implements OnInit {
    set content(content: ElementRef);
    mapLoaded: EventEmitter<boolean>;
    private mapViewEl;
    private _workUnits;
    set workUnits(workUnits: string[]);
    get workUnits(): string[];
    constructor();
    initializeMap(): Promise<void>;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WorkUnitComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WorkUnitComponent, "workUnit", never, { "workUnits": "workUnits"; }, { "mapLoaded": "mapLoaded"; }, never, never>;
}
