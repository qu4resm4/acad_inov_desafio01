import { CreateUserDto } from '../dto/create-user/create-user.dto';
import { CreateUserDao } from '../interfaces/dao/createUserDao';

export function convertCreateUserDtoToDao(createUserDto: CreateUserDto): CreateUserDao {
  const {
    userIdentification,
    userAddress,
    userAcademic,
    userContact,
  } = createUserDto;

  return {
    name: userIdentification.name,
    dateOfBirth: userIdentification.dateOfBirth,
    gender: userIdentification.gender,
    cpf: userIdentification.cpf,
    phone: userIdentification.phone,
    email: userIdentification.email,
    nationality: userIdentification.nationality,
    maritalStatus: userIdentification.maritalStatus,

    address: userAddress.address,
    street: userAddress.street,
    number: userAddress.number,
    complement: userAddress.complement,
    neighborhood: userAddress.neighborhood,
    city: userAddress.city,
    state: userAddress.state,
    postalCode: userAddress.postalCode,
    country: userAddress.country,

    registrationNumber: userAcademic.registrationNumber,
    course: userAcademic.course,
    yearOfEntry: userAcademic.yearOfEntry,
    currentSemester: userAcademic.currentSemester,
    academicStatus: userAcademic.academicStatus,
    gpa: userAcademic.gpa,
    educationMode: userAcademic.educationMode,
  };
}
