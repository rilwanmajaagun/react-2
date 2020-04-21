import React from 'react';
import './App.css';
import Greet from './Greet'
import Welcome from './Welcome'
import Message from './Message'
import Counter from './Counter'
import Tabel from './Tabel'
import List from './List '
import StyleSheet from './StyleSheet'
import Form from './Form';
import Condition from './Condition';
import StaticgetDerived from './lifecyclemethod/StaticgetDerived';
import ComponentDis from './lifecyclemethod/ComponentDis';
import { Switch, Route } from 'react-router-dom';
import PostList from './lifecyclemethod/PostList';
import Form2 from './Form2';
import Hooks1 from './Hooks/Hooks1';
import Home from './Home/Home';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
import Todo from './Todo/Todo';
import Popup from 'react-popup';
import Helmet from 'react-helmet';
import Form3 from './Form hooks/Form3';
import Spring1 from './Animation/Spring1';
import Counter1 from './Hooks/Counter1';
import Counter2 from './Hooks/Counter2';
import PostForm from './Form hooks/PostForm';
import GetData from './Form hooks/GetData';
// import './Popup.css';


const NoMatchPage = () => {
  return (
    <h3>404 - Not found</h3>
  );
};


function App() {
  return (
   
    <div className="App">
      {/* <Helmet title="My react app"
      meta={[
        {name:'title', content:'person info'

        },
        {name:'description', content:"this recipe talks about RReact"
      }
      ]}/> */}
      {/* <Header title="Welcome to Rilwan React class"/>
      <Content>
        <Home/>
      </Content> */}
      {/* <Form/> */}
      {/* <Form3/> */}
      {/* <Footer/> */}
      {/* <Popup/> */}
      {/* <Todo/> */}
      <Switch>
         {/* <Route exact path="/" component ={()=><Greet name="rilwan" age="30"/>}/>
        <Route path="/message" component ={Message}/>
        <Route path ="{/counter" component = {Counter}/>
        <Route component={NoMatchPage} /> */}
        {/* <Greet name= "rilwan" age="30"/> */}
        {/* <Welcome name = "kolade"/> */}
        {/* <Message /> 
        <Counter /> 
        <Tabel />
        <List />
        <StyleSheet primary = {true}/> 
        <Form/>
        <Condition/>
        <StaticgetDerived /> */}
        {/* <ComponentDis color={"red"}/>  */}
        {/* <PostList/> */}
{/* 
        <Message>
          <Greet></Greet>
        </Message> */}
        {/* <Form2/> */}
        {/* <Form/> */}
      {/* <Hooks1/> */}
      {/* <Spring1/> */}
        {/* <Counter2/> */}
        <PostForm/>
        {/* <GetData/> */}
      </Switch>
    </div>
  );
}

export default App;
