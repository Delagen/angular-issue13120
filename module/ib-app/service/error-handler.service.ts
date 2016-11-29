import {
	ErrorHandler,
	Inject,
	Injectable
} from "@angular/core";
import {IbConfig} from "lib-ng/module/ib-config";

@Injectable()
export class IbAppErrorHandler extends ErrorHandler {
	constructor(@Inject(IbConfig) ibConfig: IbConfig) {
		super(ibConfig.debug);
	}

	//todo: use IbConfig
	// handleError(error: any): void {
	// 	//note: https://i-break-codes.github.io/ejs/
	// 	super.handleError(error);
	// }
}
