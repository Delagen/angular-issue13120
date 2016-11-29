import {
	ModuleWithProviders,
	NgModule
} from "@angular/core";
import {PROVIDERS} from "./ib-app/providers";
import {IbConfigModule} from "lib-ng/module/ib-config";

export * from "./ib-app/index";

@NgModule({
			  imports: [IbConfigModule]
		  })
export class IbAppModule {
	//tslint:disable-next-line function-name
	static forRoot(): ModuleWithProviders {
		return {
			ngModule:  IbAppModule,
			providers: PROVIDERS
		};
	}

	//tslint:disable-next-line function-name
	static forChild(): ModuleWithProviders {
		return {
			ngModule: IbAppModule
		};
	}
}
