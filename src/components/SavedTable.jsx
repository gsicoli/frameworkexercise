import { Component } from 'react';
import { connect } from 'react-redux';
import { getSavedVehicle } from '../actions';

export class SavedTable extends Component {
  constructor(props) {
    super(props);
    this.counter = 0;
  }

  componentDidMount() {
    this.props.getSavedVehicle();
    this.counter = 0;
  }

  render() {
    return (
      <table className="table table-hover offset-md-2 col-md-8">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Modelo</th>
            <th scope="col">Marca</th>
            <th scope="col">Ano</th>
            <th scope="col">Combustível</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          {this.props.vehicles.map(el => (
            <tr>
              <th scope="row">{++this.counter}</th>
              <td>{el.marca}</td>
              <td>{el.name}</td>
              <td>{el.ano_modelo}</td>
              <td>{el.combustivel}</td>
              <td>{el.preco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  vehicles: state.vehiclesSaved,
});

const mapDispatchToProps = dispatch => ({
  getSavedVehicle: () => dispatch(getSavedVehicle()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SavedTable);
