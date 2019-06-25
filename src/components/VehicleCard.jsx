import { Component } from 'react';
import { connect } from 'react-redux';

export class VehicleCard extends Component {
  render() {
    return (
      <div className="card vehicleCard offset-md-2 col-md-8">
        <div className="card-body">
          <h5 className="card-title">{this.props.vehicle.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.vehicle.marca}</h6>
          <p className="card-text">Ano: {this.props.vehicle.ano_modelo}<br />Combustível: {this.props.vehicle.combustivel}</p>
          <p className="card-text offset-md-6">Valor: {this.props.vehicle.preco}</p>

          <a href="#" className="card-link">Card link</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  vehicle: state.vehicle,
});

export default connect(
  mapStateToProps,
)(VehicleCard);
