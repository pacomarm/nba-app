import React from 'react';
import { mount, configure } from "enzyme";
import { AppRouter } from '../../routers/AppRouter';
import { MemoryRouter } from 'react-router-dom';

import Adapter, { prototype } from '@wojtekmaj/enzyme-adapter-react-17';
import { AuthContext } from '../../auth/AuthContext';
configure({adapter: new Adapter()});

describe('tests AppRouter', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    test('should show login if not Auth', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();

    });

    test('should show Lakers component if Auth', () => { 

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Paco'
            }
        }
        
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect( wrapper.find('.navbar').exists() ).toBe(true);
    })

    test('should ', () => {
    
    })
    
})
