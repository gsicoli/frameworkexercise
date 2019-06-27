import { Component } from 'react';
import { connect } from 'react-redux';
import { saveVehicle } from '../actions';

export class VehicleCard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.saveVehicle(this.props.vehicle);
  }

  render() {
    let vcClasses = 'card vehicleCard offset-md-2 col-md-8'
    if (this.props.vehicle.name === undefined) {
      vcClasses += ' d-none';
    }

    return (
      <div className={vcClasses}>
        <div className="card-body">
          <h5 className="card-title">{this.props.vehicle.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.vehicle.marca}</h6>
          <p className="card-text">Ano: {this.props.vehicle.ano_modelo}<br />Combustível: {this.props.vehicle.combustivel}</p>
          <p className="card-text offset-md-6">Valor: {this.props.vehicle.preco}</p>

          <button onClick={this.handleClick} type="button" className="btn btn-link">salvar</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  vehicle: state.vehicle,
  displayCard: state.displayCard,
});

const mapDispatchToProps = dispatch => ({
  saveVehicle: vehicle => dispatch(saveVehicle(vehicle)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VehicleCard);
