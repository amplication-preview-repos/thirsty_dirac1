import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { QueueList } from "./queue/QueueList";
import { QueueCreate } from "./queue/QueueCreate";
import { QueueEdit } from "./queue/QueueEdit";
import { QueueShow } from "./queue/QueueShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { ProducerList } from "./producer/ProducerList";
import { ProducerCreate } from "./producer/ProducerCreate";
import { ProducerEdit } from "./producer/ProducerEdit";
import { ProducerShow } from "./producer/ProducerShow";
import { ConsumerList } from "./consumer/ConsumerList";
import { ConsumerCreate } from "./consumer/ConsumerCreate";
import { ConsumerEdit } from "./consumer/ConsumerEdit";
import { ConsumerShow } from "./consumer/ConsumerShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"RabbitMQService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Queue"
          list={QueueList}
          edit={QueueEdit}
          create={QueueCreate}
          show={QueueShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="Producer"
          list={ProducerList}
          edit={ProducerEdit}
          create={ProducerCreate}
          show={ProducerShow}
        />
        <Resource
          name="Consumer"
          list={ConsumerList}
          edit={ConsumerEdit}
          create={ConsumerCreate}
          show={ConsumerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
