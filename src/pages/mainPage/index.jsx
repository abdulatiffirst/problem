import React from "react";
import Navbar from "../../components/navbar";
import AboutUsPage from "../aboutUsPage";
import ContactPage from "../contactPage";
import HomePage from "../homePage";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import ProductItem from "../productItem/item";
import ProductPage from "../productPage/product";

function MainPage() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/about">
          <AboutUsPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>

        <Route path="/product" exact>
          <ProductPage />
        </Route>
        <React path="/product/:productIndex">
          <ProductItem />
        </React>
      </Switch>
      
    </div>
  );
}

export default MainPage;
