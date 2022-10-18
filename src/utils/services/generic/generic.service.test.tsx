import { GenericService } from './generic.service';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { AuthenticationService } from '../authentication/authentication.service';

describe('generic service', () => {

  beforeAll(() => {
    const authenticationService = new AuthenticationService();
    authenticationService.setUser({token: 'teste'});
  })

  it('render generic as service', () => {
    const genericService = new GenericService();
    expect(genericService).toBeTruthy();
  });

  it('has get functions', () => {
    var mock = new MockAdapter(axios);
    const data = { response: true };
    mock.onGet('teste').reply(200, data);
    const genericService = new GenericService();
    genericService.get('teste')
      .then((response: any) => {
        expect(response).toEqual(data);
      });
  });

  it('has post function', () => {
    var mock = new MockAdapter(axios);
    const data = { response: true };
    mock.onPost('teste').reply(200, data);
    const genericService = new GenericService();
    genericService.postToken('teste', '')
      .then((response: any) => {
        expect(response).toEqual(data);
      });
  });

});
