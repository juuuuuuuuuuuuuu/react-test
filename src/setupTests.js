/**
 * CRA 프로젝트에 필요한 테스트 설정
 */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
