import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, ViewChild, Output, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { __awaiter } from 'tslib';
import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Basemap from '@arcgis/core/Basemap';
import LabelClass from '@arcgis/core/layers/support/LabelClass';
import { SimpleFillSymbol } from '@arcgis/core/symbols';
import Color from '@arcgis/core/Color';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://loc----alhost:27552',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

class YaaranutService {
    constructor() {
        this.apiUrl = "";
        this.apiUrl = environment.apiUrl;
    }
}
YaaranutService.ɵfac = function YaaranutService_Factory(t) { return new (t || YaaranutService)(); };
YaaranutService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: YaaranutService, factory: YaaranutService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(YaaranutService, [{
        type: Injectable
    }], function () { return []; }, null); })();

class WorkUnitService {
    constructor() { }
}
WorkUnitService.ɵfac = function WorkUnitService_Factory(t) { return new (t || WorkUnitService)(); };
WorkUnitService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: WorkUnitService, factory: WorkUnitService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WorkUnitService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

const _c0$1 = ["mapViewNode"];
class WorkUnitComponent {
    constructor(ys) {
        this.ys = ys;
        this.mapLoaded = new EventEmitter();
        this._workUnits = [];
        this.firstTime = true;
        this._z = "z";
        this.featerLayer = new FeatureLayer();
        this.mapView = new MapView();
    }
    set content(content) {
        if (content) {
            this.mapViewEl = content;
        }
    }
    set zz(zzz) {
        this._z = zzz;
    }
    get zz() {
        return this._z;
    }
    set workUnits(workUnits) {
        this._workUnits = workUnits;
        if (this.firstTime) {
            this.firstTime = false;
            this.initializeMap();
        }
        const WorkUnitsWhere = workUnits.map(workUnit => "'" + workUnit + "'").
            join();
        this.featerLayer.definitionExpression = "GlobalID in (" + WorkUnitsWhere + ")";
        this.featerLayer.when(() => {
            const query = this.featerLayer.createQuery();
            query.outSpatialReference = this.mapView.spatialReference;
            this.featerLayer.queryFeatures().then(response => {
                response.features.forEach(feature => {
                    const axzz = "Dfgd";
                });
            });
            this.featerLayer.queryExtent(query)
                .then(response => {
                if (response.extent !== null) {
                    response.extent.spatialReference = this.mapView.spatialReference;
                    this.mapView.goTo(response.extent).catch(function (error) { console.error(error); });
                }
                const EsriPwoerByelements = document.getElementsByClassName("esri-ui calcite-theme-light");
                //EsriPwoerByelements[0].setAttribute("style","display:none");           
                for (let i = 0; i < EsriPwoerByelements.length; i++) {
                    EsriPwoerByelements[i].setAttribute("style", "display:none");
                }
            });
        });
    }
    get workUnits() {
        return this._workUnits;
    }
    initializeMap() {
        return __awaiter(this, void 0, void 0, function* () {
            const webMap = new WebMap({
                basemap: "topo",
                //portalItem: {
                //  //url:"https://services2.arcgis.com/utNNrmXb4IZOLXXs/ArcGIS/rest/services/JNFILForest/FeatureServer/0/query"
                //  id: "streets"
                //}
            });
            let basemap = new Basemap({
                portalItem: {
                    //url:""
                    id: "streets" // WGS84 Streets Vector webmap
                }
            });
            try {
                // this.featerLayer = new FeatureLayer({ url: "http://localhost:27552/utNNrmXb4IZOLXXs/ArcGIS/rest/services/Test_KKLForestManagementUnits/FeatureServer/0/query" });
                this.featerLayer = new FeatureLayer({
                    url: this.ys.apiUrl + "/ArcGIS/rest/services/KKLForestManagementUnits/FeatureServer/0"
                });
                this.featerLayer.opacity = 0.5;
                this.featerLayer.definitionExpression = "1=2";
                //this.featerLayer.displayField = "FOR_NO";
                //this.featerLayer.labelsVisible = true;
                //this.featerLayer.legendEnabled = true;
                //this.featerLayer.outFields = ["FOR_NO"];
                //this.featerLayer.popupEnabled = true;
                const featerRenderer = new SimpleRenderer();
                featerRenderer.label = "{FOR_NO}";
                const polygonsSimpleFillSymbol = new SimpleFillSymbol();
                polygonsSimpleFillSymbol.color = Color.fromString("gold");
                polygonsSimpleFillSymbol.outline.color = Color.fromString("blue");
                polygonsSimpleFillSymbol.outline.width = 2;
                featerRenderer.symbol = polygonsSimpleFillSymbol;
                const labelClass = new LabelClass();
                labelClass.labelExpressionInfo = { expression: "$feature.FOR_NO  " };
                this.featerLayer.labelingInfo = [labelClass];
                this.featerLayer.renderer = featerRenderer;
                webMap.add(this.featerLayer);
                this.mapView.container = this.mapViewEl.nativeElement;
                this.mapView.map = webMap;
                //(await mapView.whenLayerView(featerLayer)).filter.where = "GlobalID = '" + this._filter[0] + "'";
                //mapView.when(() => {
                //  this.mapLoaded.emit(true);
                //});
            }
            catch (error) {
                console.error(error);
                alert('We have an error: ' + error);
            }
        });
    }
    ngOnInit() {
    }
}
WorkUnitComponent.ɵfac = function WorkUnitComponent_Factory(t) { return new (t || WorkUnitComponent)(i0.ɵɵdirectiveInject(YaaranutService)); };
WorkUnitComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WorkUnitComponent, selectors: [["YaaranutGis-workUnit"]], viewQuery: function WorkUnitComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$1, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
    } }, inputs: { zz: "zz", workUnits: "workUnits" }, outputs: { mapLoaded: "mapLoaded" }, decls: 2, vars: 0, consts: [[2, "width", "100%", "height", "100%", "background-color", "yellow"], ["mapViewNode", ""]], template: function WorkUnitComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0, 1);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WorkUnitComponent, [{
        type: Component,
        args: [{
                selector: 'YaaranutGis-workUnit',
                template: `
  <div #mapViewNode style="width:100%;height: 100%;background-color:yellow"></div>
  `,
                styles: []
            }]
    }], function () { return [{ type: YaaranutService }]; }, { content: [{
            type: ViewChild,
            args: ['mapViewNode', { static: true }]
        }], mapLoaded: [{
            type: Output
        }], zz: [{
            type: Input
        }], workUnits: [{
            type: Input
        }] }); })();

class WorkUnitModule {
}
WorkUnitModule.ɵfac = function WorkUnitModule_Factory(t) { return new (t || WorkUnitModule)(); };
WorkUnitModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: WorkUnitModule });
WorkUnitModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            FormsModule,
            BrowserModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WorkUnitModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    WorkUnitComponent
                ],
                imports: [
                    FormsModule,
                    BrowserModule
                ],
                exports: [
                    WorkUnitComponent
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(WorkUnitModule, { declarations: [WorkUnitComponent], imports: [FormsModule,
        BrowserModule], exports: [WorkUnitComponent] }); })();

class SeedsCollectService {
    constructor() { }
}
SeedsCollectService.ɵfac = function SeedsCollectService_Factory(t) { return new (t || SeedsCollectService)(); };
SeedsCollectService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SeedsCollectService, factory: SeedsCollectService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SeedsCollectService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

const _c0 = ["mapViewSeedsCollect"];
class SeedsCollectComponent {
    constructor(ys) {
        this.ys = ys;
        this._SeedsCollects = [];
        this.firstTime = true;
        this.mapLoaded = new EventEmitter();
        this.featerLayer = new FeatureLayer();
        this.mapView = new MapView();
    }
    set content(content) {
        if (content) {
            this.mapViewEl = content;
        }
    }
    set seedsCollects(SeedsCollects) {
        this._SeedsCollects = SeedsCollects;
        if (this.firstTime) {
            this.firstTime = false;
            this.initializeMap();
        }
        let SeedsCollectsWhere = "";
        this._SeedsCollects.forEach(SeedsCollect => SeedsCollectsWhere += "GlobalID_2 ='" + SeedsCollect + "' or ");
        SeedsCollectsWhere += "1=2";
        this.featerLayer.definitionExpression = SeedsCollectsWhere;
        this.featerLayer.when(() => {
            const query = this.featerLayer.createQuery();
            query.outSpatialReference = this.mapView.spatialReference;
            this.featerLayer.queryFeatures().then(response => {
                response.features.forEach(feature => {
                    const axzz = "Dfgd";
                });
            });
            this.featerLayer.queryExtent(query)
                .then(response => {
                if (response.extent !== null) {
                    response.extent.spatialReference = this.mapView.spatialReference;
                    this.mapView.goTo(response.extent).catch(function (error) { console.error(error); });
                }
                var EsriPwoerByelements = document.getElementsByClassName("esri-ui calcite-theme-light");
                for (let i = 0; i < EsriPwoerByelements.length; i++) {
                    EsriPwoerByelements[i].setAttribute("style", "display:none");
                }
            });
        });
    }
    get seedsCollects() {
        return this._SeedsCollects;
    }
    initializeMap() {
        return __awaiter(this, void 0, void 0, function* () {
            const webMap = new WebMap({
                basemap: "topo",
                //portalItem: {
                //  //url:"https://services2.arcgis.com/utNNrmXb4IZOLXXs/ArcGIS/rest/services/JNFILForest/FeatureServer/0/query"
                //  id: "streets"
                //}
            });
            let basemap = new Basemap({
                portalItem: {
                //url:""
                //id: "streets"  // WGS84 Streets Vector webmap
                }
            });
            try {
                //esriConfig.apiKey = "AAPK9a3f55c380f94d1bb10a7566c7b32f941X_pcZKXmWY7Grjs6oA9AqufsDHrvRDYaOlUG8gvyD5fhZv-OGYyIgXEO-ihuO4T";
                this.featerLayer = new FeatureLayer({
                    url: this.ys.apiUrl + "/ArcGIS/rest/services/SeedCollect2021/FeatureServer/0"
                });
                this.featerLayer.opacity = 0.5;
                this.featerLayer.definitionExpression = "1=2";
                //this.featerLayer.displayField = "FOR_NO";
                //this.featerLayer.labelsVisible = true;
                //this.featerLayer.legendEnabled = true;
                //this.featerLayer.outFields = ["FOR_NO"];
                //this.featerLayer.popupEnabled = true;
                const featerRenderer = new SimpleRenderer();
                featerRenderer.label = "{Site}";
                const polygonsSimpleFillSymbol = new SimpleFillSymbol();
                polygonsSimpleFillSymbol.color = Color.fromString("gold");
                polygonsSimpleFillSymbol.outline.color = Color.fromString("blue");
                polygonsSimpleFillSymbol.outline.width = 2;
                featerRenderer.symbol = polygonsSimpleFillSymbol;
                const labelClass = new LabelClass();
                labelClass.labelExpressionInfo = { expression: "$feature.Site + ', ' +  $feature.HebNic " };
                this.featerLayer.labelingInfo = [labelClass];
                //this.featerLayer.renderer = featerRenderer;
                webMap.add(this.featerLayer);
                this.mapView.container = this.mapViewEl.nativeElement;
                this.mapView.map = webMap;
                //(await mapView.whenLayerView(featerLayer)).filter.where = "GlobalID = '" + this._filter[0] + "'";
                //mapView.when(() => {
                //  this.mapLoaded.emit(true);
                //});
            }
            catch (error) {
                console.error(error);
                alert('We have an error: ' + error);
            }
        });
    }
    ngOnInit() {
    }
}
SeedsCollectComponent.ɵfac = function SeedsCollectComponent_Factory(t) { return new (t || SeedsCollectComponent)(i0.ɵɵdirectiveInject(YaaranutService)); };
SeedsCollectComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SeedsCollectComponent, selectors: [["YaaranutGis-SeedsCollect"]], viewQuery: function SeedsCollectComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
    } }, inputs: { seedsCollects: "seedsCollects" }, outputs: { mapLoaded: "mapLoaded" }, decls: 2, vars: 0, consts: [[2, "width", "100%", "height", "100%", "background-color", "green"], ["mapViewSeedsCollect", ""]], template: function SeedsCollectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0, 1);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SeedsCollectComponent, [{
        type: Component,
        args: [{
                selector: 'YaaranutGis-SeedsCollect',
                template: `
    <div #mapViewSeedsCollect style="width:100%;height: 100%;background-color:green"></div>
  `,
                styles: []
            }]
    }], function () { return [{ type: YaaranutService }]; }, { content: [{
            type: ViewChild,
            args: ['mapViewSeedsCollect', { static: true }]
        }], mapLoaded: [{
            type: Output
        }], seedsCollects: [{
            type: Input
        }] }); })();

class SeedsCollectModule {
}
SeedsCollectModule.ɵfac = function SeedsCollectModule_Factory(t) { return new (t || SeedsCollectModule)(); };
SeedsCollectModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SeedsCollectModule });
SeedsCollectModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            FormsModule,
            BrowserModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SeedsCollectModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    SeedsCollectComponent
                ],
                imports: [
                    FormsModule,
                    BrowserModule
                ],
                exports: [
                    SeedsCollectComponent
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SeedsCollectModule, { declarations: [SeedsCollectComponent], imports: [FormsModule,
        BrowserModule], exports: [SeedsCollectComponent] }); })();

/*
 * Public API Surface of work-unit
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SeedsCollectComponent, SeedsCollectModule, SeedsCollectService, WorkUnitComponent, WorkUnitModule, WorkUnitService, YaaranutService };
//# sourceMappingURL=yaaranut-gis.js.map
