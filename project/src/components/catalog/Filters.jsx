import * as React from "react";
import TextField from "@mui/material/TextField";
import {SliderPrice} from "./SliderPrice";
import {RatingSIze} from "./RatingSIze";

import "./css/filter.css";


class Filters extends React.Component {


  render() {

    const { searchHandler, priceHandler, ratingValue } = this.props

    return (
        <div>
      <div className="searching-filter">
        <TextField onChange={searchHandler} id="outlined-search" label="Search field" type="search" />
      </div>

          <div className="price-filter">
            <SliderPrice priceHandler={priceHandler} />
          </div>

          <div className="rating-filter">
            <RatingSIze ratingValue={ratingValue} />
          </div>

        </div>
    );
  }
}

export { Filters };
