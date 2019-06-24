import { Component } from 'react';
import VehiclesCategory from './VehiclesCategory';
import Brands from './Brands';
import Models from './Models';
import VehicleYear from './VehicleYear';

export class FipeForm extends Component {
  render() {
    return (
      <form>
        <div className="form-row">
          <VehiclesCategory />
          <Brands />
          <Models />
          <VehicleYear />
        </div>
      </form>
    );
  }
}

export default FipeForm;
