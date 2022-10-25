import React, { Component } from "react";
import "./css/categories.css";
import { ItemCategory } from "./ItemCategory";
import PropTypes from "prop-types";


class Categories extends Component {

  render() {
    const { categories } = this.props;
    return (
      <div className="categories-wrapper">

        <div className="categories">
          {categories.map((item) => (
            <ItemCategory key={item.id} category={item} />
          ))}
        </div>
      </div>

    );
  }
}


Categories.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object),
}

Categories.defaultProps = {
    categories: [],
}

export { Categories };
