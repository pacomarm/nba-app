import React from 'react';
import { mount, configure } from "enzyme";
import { DashboardRoutes } from '../../../routers/DashboardRoutes';
import { MemoryRouter, Redirect, Route } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { AuthContext } from '../../../auth/AuthContext';
import { PlayerScreen } from '../../../components/players/PlayerScreen';
configure({adapter: new Adapter()});

describe('tests PlayerScreen', () => {

    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
    }

    
    test('should show correctly', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/player']}>
                <PlayerScreen history={history}/>
            </MemoryRouter>
        );
        expect( wrapper.find(Redirect).exists() ).toBe(true);
    });

    test('should show a player if the parameter exists', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/player/lakers-ad']}>
                <Route path="/player/:playerId" component={PlayerScreen}/>
            </MemoryRouter>
        );
        expect( wrapper.find('.row').exists() ).toBe(true);
    });

    test('should return to prev screen with PUSH', () => {
        
        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn(),
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/player/lakers-ad']}>
                <Route 
                    path="/player/:playerId" 
                    component={ props => <PlayerScreen history={history}/> }
                />
            </MemoryRouter>
        );
        wrapper.find('button').prop('onClick')();

        expect( history.push ).toHaveBeenCalledWith('/');
        expect( history.goBack ).not.toHaveBeenCalled();
    });

    test('should return to prev screen with GOBACK', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/player/lakers-ad']}>
                <Route 
                    path="/player/:playerId" 
                    component={ props => <PlayerScreen history={history}/> }
                />
            </MemoryRouter>
        );
        wrapper.find('button').prop('onClick')();

        expect( history.push ).toHaveBeenCalledTimes(0);
        expect( history.goBack ).toHaveBeenCalled();
    });

    test('should call redirect if player DNE', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/player/lakers-ad22']}>
                <Route 
                    path="/player/:playerId" 
                    component={ props => <PlayerScreen history={history}/> }
                />
            </MemoryRouter>
        );

        expect( wrapper.text() ).toBe('');
    });
    
})
