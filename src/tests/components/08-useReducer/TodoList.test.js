import { shallow } from 'enzyme';
import TodoList from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Tests for TodoList', () => { 
    
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList
            todos={ demoTodos }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />
    )

    test('should show component correctly', () => { 

        expect( wrapper ).toMatchSnapshot();
     })

     test('should show 2 <TodoListItem />', () => { 

        expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length );

        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any(Function) );
     })
 })