import { faker } from '@faker-js/faker';


const randomName = faker.person.fullName();
const randomEmail = faker.internet.email();
const _ = require('lodash');
const dayjs = require('dayjs');
console.log(dayjs(" 4 sept 2020").format("DD/MM/YYYY"));
console.log(_.upperCase("bonjour npm"));