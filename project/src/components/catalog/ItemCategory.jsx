import { Component } from "react";
import * as React from "react";
import "./css/item-category.css";
import PropTypes from "prop-types";
import {Categories} from "./Categories";

class ItemCategory extends Component {
  render() {
    const { category } = this.props;

    return (
      <div className="category">
        <h3>{category.name}</h3>
      </div>
    );
  }
}

ItemCategory.propTypes = {
  category: PropTypes.object,
}

ItemCategory.defaultProps = {
  category: {},
}


export { ItemCategory };
