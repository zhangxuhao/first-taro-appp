import { Component, PropsWithChildren } from 'react';

import { Provider } from 'react-redux';
import configStore from './store';
import './app.scss';

const store = configStore()
class App extends Component<PropsWithChildren> {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    // this.props.children 是将要会渲染的页面
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
