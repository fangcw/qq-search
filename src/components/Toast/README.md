# Toast

## 特点
- 单列模式
- 可设置自动关闭时间

## API

### show(msg:string, duration?: number)
显示toast

```ts
import Toast from './components/Toast';

// 显示toast
Toast.show('toast内容')

// 可设置时间 默认3s
Toast.show('toast内容', 10)
```


### hide()
关闭toast


```ts
// 关闭
Toast.hide()
```


