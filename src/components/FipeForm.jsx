import { Component } from 'react';
import VehiclesCategory from './VehiclesCategory';
import Brands from './Brands';

export class FipeForm extends Component {
  render() {
    return (
      <form>
        <div className="form-row">
          <VehiclesCategory />
          <Brands />
        </div>
      </form>
    );
  }
}

export default FipeForm;
