import { render, screen } from '@testing-library/react';
import QQUser, { User } from '../../components/User';

test('renders QQUser', () => {
  const user: User = {
    code: 1,
    msg: 'ok',
    name: 'qq昵称',
    qq: '12345678',
    qlogo: '',
    lvzuan: {
      level: 1,
      score: 1,
      isyear: 0
    }
  }
  render(<QQUser user={user} />);
  const headerElement = screen.getByText(/12345678/i);
  expect(headerElement).toBeInTheDocument();
});
