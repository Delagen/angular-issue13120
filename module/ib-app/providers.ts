import {
	ErrorHandler,
	Provider
} from "@angular/core";
import {IbAppErrorHandler} from "./service/index";

export const PROVIDERS: Provider[] = [
	{
		provide: ErrorHandler,
		useClass: IbAppErrorHandler
	}
];
