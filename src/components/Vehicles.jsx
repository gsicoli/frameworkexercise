import { Component } from 'react';
import { connect } from 'react-redux';
import { vehicleChosen } from '../actions';
import { SELECTOR_PLACEHOLDER } from '../constants';

export class Vehicles extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const params = {
      idModel: event.target.value,
    }
    this.props.vehicleChosen(params);
  }

  render() {
    return (
      <div className="form-group col-md-2">
        <label htmlFor="inputVehicle">Veículo</label>
        <select value={this.props.selectVal} id="inputVehicle" className='form-control' onChange={this.handleChange} disabled={this.props.isDisabled}>
          <option disabled value={SELECTOR_PLACEHOLDER}>{SELECTOR_PLACEHOLDER}</option>
            {this.props.vehicles.map(el => (
              <option value={el.id}>{el.name}</option>
            ))}
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  vehicles: state.availableVehicles,
  isDisabled: state.vehiclesDisabled,
  selectVal: state.selectValueVehicles,
});

const mapDispatchToProps = dispatch => ({
  vehicleChosen: vehicle => dispatch(vehicleChosen(vehicle)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Vehicles);
