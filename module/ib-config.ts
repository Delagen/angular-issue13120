import {
	Inject,
	Injectable,
	Injector,
	ModuleWithProviders,
	NgModule,
	OpaqueToken
} from "@angular/core";
export var IbConfigDebugToken: OpaqueToken = new OpaqueToken("ibConfigDebug");
export var IbConfigServerUrlToken: OpaqueToken = new OpaqueToken("ibConfigServerUrl");

export interface IConfig {
	debug: boolean;
	serverUrl: string;
}

@Injectable()
export class IbConfig implements IConfig {
	constructor(@Inject(Injector) protected injector: Injector) {
		this.debug = this.injector.get(IbConfigDebugToken, this.debug);
		this.serverUrl = this.injector.get(IbConfigServerUrlToken, this.serverUrl).replace(/\/$/, "");
	}

	debug: boolean = true;
	serverUrl: string = "";
}

@NgModule({})
export class IbConfigModule {
	//tslint:disable-next-line function-name
	static forRoot(): ModuleWithProviders {
		return {
			ngModule:  IbConfigModule,
			providers: [IbConfig]
		};
	}

	//tslint:disable-next-line function-name
	static forChild(): ModuleWithProviders {
		return {
			ngModule: IbConfigModule
		};
	}
}
