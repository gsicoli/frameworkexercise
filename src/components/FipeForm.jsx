import { Component } from 'react';
import VehiclesCategory from './VehiclesCategory';
import Brands from './Brands';
import Vehicles from './Vehicles';

export class FipeForm extends Component {
  render() {
    return (
      <form>
        <div className="form-row">
          <VehiclesCategory />
          <Brands />
          <Vehicles />
        </div>
      </form>
    );
  }
}

export default FipeForm;
