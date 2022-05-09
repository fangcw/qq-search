import { useState } from 'react';
import request from './utils/request'
import Search from './components/Search';
import QQUser, { User } from './components/User';
import Loading from './components/Loading';
import Toast from './components/Toast';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const handleSearch = (value: string) => {
    if (!value) return

    const qqReg = /^[1-9]\d{4,10}$/;
    if (!qqReg.test(value)) {
      Toast.show('请输入正确的QQ号码')
      return
    }

    setLoading(true)
    request.get<User>('https://api.uomg.com/api/qq.info', { params: { qq: value } }).then(res => {
      if (res.data.code === 1) {
        setUser(res.data)
      }
    }).finally(() => {
      setLoading(false)
    })
  }


  return (
    <div className="App">
      <Loading show={loading} mask />
      <header className='header'>
        <div className='header-title'>QQ号查询</div>
        <Search onSearch={handleSearch} disabled={loading} />
      </header>
      <main className='main'>
        {user ? <QQUser user={user} /> : null}
      </main>
    </div>
  );
}

export default App;
