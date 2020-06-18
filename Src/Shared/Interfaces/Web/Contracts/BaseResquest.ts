import { validateSync } from "class-validator";
import { IApplicationValidationResult } from "Shared/Interfaces/Web/Contracts/IApplicationValidationResult";

export class BaseRequest {
  public validate(): IApplicationValidationResult {
    const errors = validateSync(this, {
      forbidNonWhitelisted: true,
      skipMissingProperties: true,
      whitelist: true,
    });

    return {
      errors,
      isValid: errors.length === 0,
    };
  }
}
