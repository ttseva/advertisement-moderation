import { ConfigProvider, Layout } from 'antd';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { router } from './router';
import { store } from './store';
import './App.css';

const { Content } = Layout;

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1f5aff",
          borderRadius: 14,
        },
      }}
    >
      <Provider store={store}>
        <Layout className="app-shell">
          <Content className="app-shell__content">
            <RouterProvider router={router} />
          </Content>
        </Layout>
      </Provider>
    </ConfigProvider>
  );
}
