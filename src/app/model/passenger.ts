export interface Passenger {
  id: string;
  name: string;
  surname: string;
  gender: string;
  dateOfBirth: Date;
  idType: string;
  idNumber: string;
  phoneNumber: number;
  additionalInfo?: string[];
  email?: string;
  ageGroup?: string;
}
