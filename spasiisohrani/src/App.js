import React from 'react';
import './App.css';
import LeftBlock from './components/leftBlock';
import Main from './components/main';
import Menu from './components/menu';
import Icon0 from './images/dashboard.png';
import Icon1 from './images/catalog.png';
import Icon2 from './images/purchase.png';
import Icon3 from './images/stock.png';
import Icon4 from './images/sale.png';
import Icon5 from './images/retail.png';
import Icon6 from './images/finance.png';
import Icon7 from './images/priceList.png';
import Icon8 from './images/machinery.png';
import Icon9 from './images/transport.png';
import Icon10 from './images/customs.png';
import Icon11 from './images/manufacturing.png';
import Icon12 from './images/wms.png';
import Icon13 from './images/chat.png';
import Icon14 from './images/lock.png';
import Icon15 from './images/search.png';
import Icon16 from './images/bi.png';


class App extends React.Component {
  state = {
    MenuList: [
      { title: "Рабочий стол", Icon: Icon0 },
      { title: "Справочник", Icon: Icon1 },
      { title: "Закупки", Icon: Icon2 },
      { title: "Склад", Icon: Icon3 },
      { title: "Продажи", Icon: Icon4 },
      { title: "Розничная торговля", Icon: Icon5 },
      { title: "Финансы", Icon: Icon6 },
      { title: "Цены", Icon: Icon7 },
      { title: "Оборудование", Icon: Icon8 },
      { title: "Транспорт", Icon: Icon9 },
      { title: "ВЭД", Icon: Icon10 },
      { title: "Производство", Icon: Icon11 },
      { title: "WMS", Icon: Icon12 },
      { title: "Чат", Icon: Icon13 },
      { title: "Учетная запись", Icon: Icon14 },
      { title: "Поиск", Icon: Icon15 },
      { title: "BI", Icon: Icon16 }
    ],
    isClicked: ""
  }
  click = (id) => {
    this.setState((prevState) => {
      const newState = { ...prevState }
      newState.isClicked = newState.MenuList[id].title;
      return newState;
    })
  }
  render() {
    return (
      <div className="App">
        <Menu MenuList={this.state.MenuList} click={this.click} />
        <div className="Container">
          <LeftBlock title={this.state.isClicked} />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
