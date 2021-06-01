import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('tests authReducer', () => {

    test('should return default state', () => {
        const state = authReducer({logged: false}, {});
        expect(state).toEqual({logged: false});
    });

    test('should auth and show user name in navbar', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Paco'
            }
        }

        const state = authReducer({logged: false}, action);
        expect(state).toEqual({logged: true, name: 'Paco'});
    })

    test('should delete username and logged false', () => {
        const action = {
            type: types.logout,
        }
        const state = authReducer({logged: true, name: 'Paco'}, action);
        expect(state).toEqual({logged: false});
    })
    
})
