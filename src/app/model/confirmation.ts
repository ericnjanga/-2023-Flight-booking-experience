import { ConfirmationType } from "../enum/confirmation-type";

export interface Confirmation {
  type: ConfirmationType;
  message: string;
}
