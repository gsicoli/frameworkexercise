import { Component } from 'react';
import VehiclesCategory from './VehiclesCategory';

export class FipeForm extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <form>
        <div className="form-row">
          <VehiclesCategory />
        </div>
      </form>
    );
  }
}

export default FipeForm;
