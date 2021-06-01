import React from 'react';
import { mount, configure, shallow } from "enzyme";
import { MemoryRouter, Redirect, Route } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { PlayerScreen } from '../../../components/players/PlayerScreen';
import { Login } from '../../../components/login/Login';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';
configure({adapter: new Adapter()});


describe('tests Login', () => {

    const history = {
        replace: jest.fn(),
    }

    const contextValue = {
        dispatch: jest.fn(),
    }
    
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <Login history={history}/>
        </AuthContext.Provider>
    );
    
    test('should show correctly', () => {
        
        expect( wrapper).toMatchSnapshot();
    });

    test('should show a player if the parameter exists', () => {
        
        const handleClick= wrapper.find('button').prop('onClick');
        handleClick();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Paco'
            }
        });

        expect( history.replace ).toHaveBeenCalledWith('/');

        localStorage.setItem('lastPath', '/lakers');
        handleClick();
        expect( history.replace ).toHaveBeenCalledWith('/lakers');
    });
    
    
})
