import React from 'react';
import { mount, configure } from "enzyme";
import { MemoryRouter, Redirect, Route } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';
import { SearchScreen } from '../../../components/search/SearchScreen';
configure({adapter: new Adapter()});


describe('tests Login', () => {

    const contextValue = {
        dispatch: jest.fn(),
    }
    
    
    test('should show correctly with default values', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/search' ]}>
               <Route path="/search" component={SearchScreen}/>
            </MemoryRouter>
        );
        expect( wrapper).toMatchSnapshot();
        expect( wrapper.find('.alert-info').text().trim() ).toBe('Look for a player');

    });

    test('should show Lebron given q string', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/search?q=Lebron' ]}>
               <Route path="/search" component={SearchScreen}/>
            </MemoryRouter>
        );
        expect( wrapper.find('input').prop('value') ).toBe('Lebron');
        expect( wrapper).toMatchSnapshot();
    });

    test('should show error if player is not found', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/search?q=Lebron121' ]}>
               <Route path="/search" component={SearchScreen}/>
            </MemoryRouter>
        );
        expect( wrapper.find('.alert-warning').text().trim() ).toBe('No player was found');
        expect( wrapper).toMatchSnapshot();
    });

    test('should call historys PUSH', () => {
        
        const history = {
            push: jest.fn(),
        }
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/search?q=Lebron121' ]}>
                <Route 
                    path="/search" 
                    component={ () => <SearchScreen history={history}/> }

                />
            </MemoryRouter>
        );
        wrapper.find('input').simulate('change', {
            target: {
                name: 'text',
                value: 'lebron'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });
        expect( history.push ).toHaveBeenCalledWith('?q=lebron');

    })
    
    
    
    
})
