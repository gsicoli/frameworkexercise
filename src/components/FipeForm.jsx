import { Component } from 'react';
import { connect } from 'react-redux';
import { getVehicle } from '../actions';
import VehiclesCategory from './VehiclesCategory';
import Brands from './Brands';
import Models from './Models';
import VehicleYear from './VehicleYear';
import VehicleCard from './VehicleCard';

export class FipeForm extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const params = {
      category: this.props.selectedCategory,
      id: this.props.selectedBrand,
      idModel: this.props.selectedModel,
      idYear: this.props.selectedYear,
    }
    this.props.getVehicle(params);
  }

  render() {
    return (
      <form className="container">
        <div className="form-row">
          <VehiclesCategory />
          <Brands />
          <Models />
          <VehicleYear />
        </div>
        <button onClick={this.handleClick} type='button' className="btn btn-primary offset-md-9" disabled={this.props.isDisabled}>Buscar</button>
        <VehicleCard />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  isDisabled: state.buscarDisabled,
  selectedCategory: state.selectedCategory,
  selectedBrand: state.selectedBrand,
  selectedModel: state.selectedModel,
  selectedYear: state.selectedYear,
});

const mapDispatchToProps = dispatch => ({
  getVehicle: params => dispatch(getVehicle(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FipeForm);
