	// Handle multiple promises
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export function handleProfileSignup(firstName = '', lastName = '', fileName = '') {
  return Promise.allSettled([uploadPhoto(fileName), signUpUser(firstName, lastName)]);
}
