import React from 'react';
import { mount, configure } from "enzyme";
import { MemoryRouter, Router } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { AuthContext } from '../../../auth/AuthContext';
import { NavBar } from '../../../components/ui/NavBar';
import { types } from '../../../types/types';
configure({adapter: new Adapter()});

describe('tests NavBar', () => {

    const historyMock = {
        push: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
        replace: jest.fn(),

    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Paco'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <NavBar/>
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    
    
    test('should show correctly', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Paco');
    });

    test('should call logout and use history', () => {
        
        wrapper.find('button').prop('onClick')();
        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.logout
        });

        expect( historyMock.replace ).toHaveBeenCalledWith('/login');

    })
    
    
})
