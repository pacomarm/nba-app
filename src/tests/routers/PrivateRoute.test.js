import React from 'react';
import { shallow, mount, configure } from "enzyme";
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

import Adapter, { prototype } from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});

describe('tests PrivateRouter', () => {

    const props = {
        location:{
            pathname: '/lakers'
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('should show component if Auth and save local storage', () => {

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={true}
                    component={()=> <span>Hi</span> }
                    {...props}
                />
            </MemoryRouter>
        );
        expect( wrapper.find('span').exists() ).toBe(true);
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/lakers');
    });

    test('should block component if not auth', () => { 
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={false}
                    component={()=> <span>Hi</span> }
                    {...props}
                />
            </MemoryRouter>
        );
        expect( wrapper.find('span').exists() ).toBe(false);
    })
    
})
