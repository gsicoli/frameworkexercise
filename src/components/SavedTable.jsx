import { Component } from 'react';
import { connect } from 'react-redux';
import { getSavedVehicle } from '../actions';

export class SavedTable extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSavedVehicle();
  }

  getTableRows(data) {
    const rows = [];
    let counter = 0;
    data.forEach(el => {
      rows.push(
        <tr>
          <th scope="row">{++counter}</th>
          <td>{el.marca}</td>
          <td>{el.name}</td>
          <td>{el.ano_modelo}</td>
          <td>{el.combustivel}</td>
          <td>{el.preco}</td>
        </tr>
      );
    });
    return rows;
  }

  render() {
    const rows = this.getTableRows(this.props.vehicles);

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
          {rows}
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
