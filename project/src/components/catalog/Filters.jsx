import * as React from "react";
import TextField from "@mui/material/TextField";
import Slider from '@mui/material/Slider';
import {SliderPrice} from "./SliderPrice";

import "./css/filter.css";


class Filters extends React.Component {


  render() {

    const { handler} = this.props

    return (
        <div>
      <div className="searching-filter">
        <TextField onChange={handler} id="outlined-search" label="Search field" type="search" />
      </div>

          <div className="price-filter">
            <SliderPrice />
          </div>

        </div>
    );
  }
}

export { Filters };
