import { AcademicStatus } from "src/users/types/academicstatus";
import { EducationMode } from "src/users/types/educantionmode";
import { Gender } from "src/users/types/gender";
import { MaritalStatus } from "src/users/types/maritalstatus";

export interface CreateUserDao {
  name: string;
  dateOfBirth: Date;
  gender: Gender;
  cpf: string;
  phone: string;
  email: string;
  nationality: string;
  maritalStatus: MaritalStatus;

  address: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;

  registrationNumber: string;
  course: string;
  yearOfEntry: number;
  currentSemester: number;
  academicStatus: AcademicStatus;
  gpa?: number;
  educationMode: EducationMode;
}